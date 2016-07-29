// Copyright 2015 Peter W Moresi
// based heavily on code from socialcalc
'use strict';

import {
  d1900,
  MinutesInHour,
  MinutesInDay,
  SecondsInMinute,
  SecondsInDay,
  SecondsInHour,
  DaysInYear,
  MillisecondsInDay,
  AllowedDays,
  DayNames,
  DayNames3,
  MonthNames,
  MonthNames3,
  AM,
  AM1,
  PM,
  PM1,
  DefaultCurrency,
  SeparatorChar,
  DecimalChar,
  AllowedColors
}
from './constants';

import {parsedate} from './parsedate'

let FormatNumber = {};

FormatNumber.format_definitions = {}; // Parsed formats are stored here globally

// Other constants

FormatNumber.commands = {
  copy: 1, color: 2, integer_placeholder: 3, fraction_placeholder: 4, decimal: 5,
  currency: 6, general:7, separator: 8, date: 9, comparison: 10, section: 11, style: 12
};


/* *******************

result = FormatNumber.formatNumberWithFormat = function(rawvalue, format_string, currency_char)

************************* */

FormatNumber.formatNumberWithFormat = function(rawvalue, format_string, currency_char) {

  var scfn = FormatNumber;

  var op, operandstr, fromend, cval, operandstrlc;
  var startval, estartval;
  var hrs, mins, secs, ehrs, emins, esecs, ampmstr, ymd;
  var minOK, mpos, mspos;
  var result='';
  var format;
  var section, gotcomparison, compop, compval, cpos, oppos;
  var sectioninfo;
  var i, decimalscale, scaledvalue, strvalue, strparts, integervalue, fractionvalue;
  var integerdigits2, integerpos, fractionpos, textcolor, textstyle, separatorchar, decimalchar;
  var value; // working copy to change sign, etc.

  rawvalue = rawvalue-0; // make sure a number
  value = rawvalue;
  if (!isFinite(value)) return 'NaN';

  var negativevalue = value < 0 ? 1 : 0; // determine sign, etc.
  if (negativevalue) value = -value;
  var zerovalue = value == 0 ? 1 : 0;

  currency_char = currency_char || DefaultCurrency;

  FormatNumber.parse_format_string(scfn.format_definitions, format_string); // make sure format is parsed
  //console.log("format_string", format_string, format)
  format = scfn.format_definitions[format_string]; // Get format structure
  //console.log("format", format)

  if (!format) throw 'Format not parsed error.';

  section = format.sectioninfo.length - 1; // get number of sections - 1

  // has comparisons - determine which section
  if (format.hascomparison) {
    section = 0; // set to which section we will use
    gotcomparison = 0; // this section has no comparison
    for (cpos=0; ;cpos++) { // scan for comparisons
      op = format.operators[cpos];
      operandstr = format.operands[cpos]; // get next operator and operand

      // at end with no match
      if (!op) {
        // if comparison but no match
        if (gotcomparison) {
          format_string = 'General'; // use default of General
          scfn.parse_format_string(scfn.format_definitions, format_string);
          format = scfn.format_definitions[format_string];
          section = 0;
        }
        break; // if no comparision, matches on this section
      }
      // end of section
      if (op == scfn.commands.section) {
        if (!gotcomparison) { // no comparison, so it's a match
          break;
        }
        gotcomparison = 0;
        section++; // check out next one
        continue;
      }
      // found a comparison - do we meet it?
      if (op == scfn.commands.comparison) {
        i=operandstr.indexOf(':');
        compop=operandstr.substring(0,i);
        compval=operandstr.substring(i+1)-0;
        if ((compop == '<' && rawvalue < compval) ||
        (compop == '<=' && rawvalue <= compval) ||
        (compop == '=' && rawvalue == compval) ||
        (compop == '<>' && rawvalue != compval) ||
        (compop == '>=' && rawvalue >= compval) ||
        (compop == '>' && rawvalue > compval)) {
          break;
        }
        gotcomparison = 1;
      }
    }
  }
  // more than one section (separated by ";")
  else if (section > 0) {
    // two sections
    if (section == 1) {
      if (negativevalue) {
        negativevalue = 0; // sign will provided by section, not automatically
        section = 1; // use second section for negative values
      }
      else {
        section = 0; // use first for all others
      }
    }
    // three sections
    else if (section == 2) {
      if (negativevalue) {
        negativevalue = 0; // sign will provided by section, not automatically
        section = 1; // use second section for negative values
      }
      else if (zerovalue) {
        section = 2; // use third section for zero values
      }
      else {
        section = 0; // use first for positive
      }
    }
  }

  sectioninfo = format.sectioninfo[section]; // look at values for our section

  if (sectioninfo.commas > 0) { // scale by thousands
    for (i=0; i<sectioninfo.commas; i++) {
      value /= 1000;
    }
  }
  if (sectioninfo.percent > 0) { // do percent scaling
    for (i=0; i<sectioninfo.percent; i++) {
      value *= 100;
    }
  }

  decimalscale = 1; // cut down to required number of decimal digits
  for (i=0; i<sectioninfo.fractiondigits; i++) {
    decimalscale *= 10;
  }
  scaledvalue = Math.floor(value * decimalscale + 0.5);
  scaledvalue = scaledvalue / decimalscale;

  if (typeof scaledvalue != 'number') return 'NaN';
  if (!isFinite(scaledvalue)) return 'NaN';

  strvalue = scaledvalue+''; // convert to string (Number.toFixed doesn't do all we need)

  //   strvalue = value.toFixed(sectioninfo.fractiondigits); // cut down to required number of decimal digits
  // and convert to string

  if (scaledvalue == 0 && (sectioninfo.fractiondigits || sectioninfo.integerdigits)) {
    negativevalue = 0; // no "-0" unless using multiple sections or General
  }

  //console.log(rawvalue+'')

  // converted to scientific notation
  if (strvalue.indexOf('e')>=0) {
    return rawvalue+''; // Just return plain converted raw value
  }

  strparts=strvalue.match(/^\+{0,1}(\d*)(?:\.(\d*)){0,1}$/); // get integer and fraction parts
  if (!strparts) return 'NaN'; // if not a number
  integervalue = strparts[1];
  if (!integervalue || integervalue=='0') integervalue='';
  fractionvalue = strparts[2];
  if (!fractionvalue) fractionvalue = '';

  // there are date placeholders
  if (sectioninfo.hasdate) {
    //console.log('hasdate')
    // bad date
    if (rawvalue < 0) {
      return '??-???-?? ??:??:??';
    }
    startval = (rawvalue-Math.floor(rawvalue)) * SecondsInDay; // get date/time parts
    estartval = rawvalue * SecondsInDay; // do elapsed time version, too
    hrs = Math.floor(startval / SecondsInHour);
    ehrs = Math.floor(estartval / SecondsInHour);
    startval = startval - hrs * SecondsInHour;
    mins = Math.floor(startval / 60);
    emins = Math.floor(estartval / 60);
    secs = startval - mins * 60;
    decimalscale = 1; // round appropriately depending if there is ss.0
    for (i=0; i<sectioninfo.fractiondigits; i++) {
      decimalscale *= 10;
    }
    secs = Math.floor(secs * decimalscale + 0.5);
    secs = secs / decimalscale;
    esecs = Math.floor(estartval * decimalscale + 0.5);
    esecs = esecs / decimalscale;
    if (secs >= 60) { // handle round up into next second, minute, etc.
      secs = 0;
      mins++; emins++;
      if (mins >= 60) {
        mins = 0;
        hrs++; ehrs++;
        if (hrs >= 24) {
          hrs = 0;
          rawvalue++;
        }
      }
    }
    fractionvalue = (secs-Math.floor(secs))+''; // for "hh:mm:ss.000"
    fractionvalue = fractionvalue.substring(2); // skip "0."

    ymd = parsedate(rawvalue);
    ymd = {
      year: ymd.getFullYear(),
      month: ymd.getMonth() + 1,
      day: ymd.getDate()
    }

    minOK = 0; // says "m" can be minutes if true
    mspos = sectioninfo.sectionstart; // m scan position in ops
    for ( ; ; mspos++) { // scan for "m" and "mm" to see if any minutes fields, and am/pm
      op = format.operators[mspos];
      operandstr = format.operands[mspos]; // get next operator and operand
      if (!op) break; // don't go past end
      if (op==scfn.commands.section) break;
      if (op==scfn.commands.date) {
        if ((operandstr.toLowerCase()=='am/pm' || operandstr.toLowerCase()=='a/p') && !ampmstr) {
          if (hrs >= 12) {
            hrs -= 12;
            ampmstr = operandstr.toLowerCase()=='a/p' ? PM1 : PM; // "P" : "PM";
          }
          else {
            ampmstr = operandstr.toLowerCase()=='a/p' ? AM1 : AM; // "A" : "AM";
          }
          if (operandstr.indexOf(ampmstr)<0)
          ampmstr = ampmstr.toLowerCase(); // have case match case in format
        }
        if (minOK && (operandstr=='m' || operandstr=='mm')) {
          format.operands[mspos] += 'in'; // turn into "min" or "mmin"
        }
        if (operandstr.charAt(0)=='h') {
          minOK = 1; // m following h or hh or [h] is minutes not months
        }
        else {
          minOK = 0;
        }
      }
      else if (op!=scfn.commands.copy) { // copying chars can be between h and m
        minOK = 0;
      }
    }
    minOK = 0;
    for (--mspos; ; mspos--) { // scan other way for s after m
      op = format.operators[mspos];
      operandstr = format.operands[mspos]; // get next operator and operand
      if (!op) break; // don't go past end
      if (op==scfn.commands.section) break;
      if (op==scfn.commands.date) {
        if (minOK && (operandstr=='m' || operandstr=='mm')) {
          format.operands[mspos] += 'in'; // turn into "min" or "mmin"
        }
        if (operandstr=='ss') {
          minOK = 1; // m before ss is minutes not months
        }
        else {
          minOK = 0;
        }
      }
      else if (op!=scfn.commands.copy) { // copying chars can be between ss and m
        minOK = 0;
      }
    }
  }

  integerdigits2 = 0; // init counters, etc.
  integerpos = 0;
  fractionpos = 0;
  textcolor = '';
  textstyle = '';
  separatorchar = SeparatorChar;
  if (separatorchar.indexOf(' ')>=0) separatorchar = separatorchar.replace(/ /g, ' ');
  decimalchar = DecimalChar;
  if (decimalchar.indexOf(' ')>=0) decimalchar = decimalchar.replace(/ /g, ' ');

  oppos = sectioninfo.sectionstart;

  while (op = format.operators[oppos]) { // execute format
    operandstr = format.operands[oppos++]; // get next operator and operand

    if (op == scfn.commands.copy) { // put char in result
      result += operandstr;
    }

    else if (op == scfn.commands.color) { // set color
      textcolor = operandstr;
    }

    else if (op == scfn.commands.style) { // set style
      textstyle = operandstr;
    }

    else if (op == scfn.commands.integer_placeholder) { // insert number part
      if (negativevalue) {
        result += '-';
        negativevalue = 0;
      }
      integerdigits2++;
      if (integerdigits2 == 1) { // first one
        if (integervalue.length > sectioninfo.integerdigits) { // see if integer wider than field
          for (;integerpos < (integervalue.length - sectioninfo.integerdigits); integerpos++) {
            result += integervalue.charAt(integerpos);
            if (sectioninfo.thousandssep) { // see if this is a separator position
              fromend = integervalue.length - integerpos - 1;
              if (fromend > 2 && fromend % 3 == 0) {
                result += separatorchar;
              }
            }
          }
        }
      }
      if (integervalue.length < sectioninfo.integerdigits
        && integerdigits2 <= sectioninfo.integerdigits - integervalue.length) { // field is wider than value
          if (operandstr == '0' || operandstr == '?') { // fill with appropriate characters
          result += operandstr == '0' ? '0' : ' ';
          if (sectioninfo.thousandssep) { // see if this is a separator position
            fromend = sectioninfo.integerdigits - integerdigits2;
            if (fromend > 2 && fromend % 3 == 0) {
              result += separatorchar;
            }
          }
        }
      }
      else { // normal integer digit - add it
        result += integervalue.charAt(integerpos);
        if (sectioninfo.thousandssep) { // see if this is a separator position
          fromend = integervalue.length - integerpos - 1;
          if (fromend > 2 && fromend % 3 == 0) {
            result += separatorchar;
          }
        }
        integerpos++;
      }
    }
    else if (op == scfn.commands.fraction_placeholder) { // add fraction part of number
      if (fractionpos >= fractionvalue.length) {
        if (operandstr == '0' || operandstr == '?') {
          result += operandstr == '0' ? '0' : ' ';
        }
      }
      else {
        result += fractionvalue.charAt(fractionpos);
      }
      fractionpos++;
    }

    else if (op == scfn.commands.decimal) { // decimal point
      if (negativevalue) {
        result += '-';
        negativevalue = 0;
      }
      result += decimalchar;
    }

    else if (op == scfn.commands.currency) { // currency symbol
      if (negativevalue) {
        result += '-';
        negativevalue = 0;
      }
      result += operandstr;
    }

    else if (op == scfn.commands.general) { // insert "General" conversion

      // *** Cut down number of significant digits to avoid floating point artifacts:

      if (value!=0) { // only if non-zero
        var factor = Math.floor(Math.LOG10E * Math.log(value)); // get integer magnitude as a power of 10
        factor = Math.pow(10, 13-factor); // turn into scaling factor
        value = Math.floor(factor * value + 0.5)/factor; // scale positive value, round, undo scaling
        if (!isFinite(value)) return 'NaN';
      }
      if (negativevalue) {
        result += '-';
      }
      strvalue = value+''; // convert original value to string
      if (strvalue.indexOf('e')>=0) { // converted to scientific notation
      result += strvalue;
      continue;
    }
    strparts=strvalue.match(/^\+{0,1}(\d*)(?:\.(\d*)){0,1}$/); // get integer and fraction parts
    integervalue = strparts[1];
    if (!integervalue || integervalue=='0') integervalue='';
    fractionvalue = strparts[2];
    if (!fractionvalue) fractionvalue = '';
    integerpos = 0;
    fractionpos = 0;
    if (integervalue.length) {
      for (;integerpos < integervalue.length; integerpos++) {
        result += integervalue.charAt(integerpos);
        if (sectioninfo.thousandssep) { // see if this is a separator position
          fromend = integervalue.length - integerpos - 1;
          if (fromend > 2 && fromend % 3 == 0) {
            result += separatorchar;
          }
        }
      }
    }
    else {
      result += '0';
    }
    if (fractionvalue.length) {
      result += decimalchar;
      for (;fractionpos < fractionvalue.length; fractionpos++) {
        result += fractionvalue.charAt(fractionpos);
      }
    }
  }
  else if (op==scfn.commands.date) { // date placeholder
    operandstrlc = operandstr.toLowerCase();
    if (operandstrlc=='y' || operandstrlc=='yy') {
      result += (ymd.year+'').substring(2);
    }
    else if (operandstrlc=='yyyy') {
      result += ymd.year+'';
    }
    else if (operandstrlc=='d') {
      result += ymd.day+'';
    }
    else if (operandstrlc=='dd') {
      cval = 1000 + ymd.day;
      result += (cval+'').substr(2);
    }
    else if (operandstrlc=='ddd') {
      cval = Math.floor(rawvalue+6) % 7;
      result += DayNames3[cval];
    }
    else if (operandstrlc=='dddd') {
      cval = Math.floor(rawvalue+6) % 7;
      result += DayNames[cval];
    }
    else if (operandstrlc=='m') {
      result += ymd.month+'';
    }
    else if (operandstrlc=='mm') {
      cval = 1000 + ymd.month;
      result += (cval+'').substr(2);
    }
    else if (operandstrlc=='mmm') {
      result += MonthNames3[ymd.month-1];
    }
    else if (operandstrlc=='mmmm') {
      result += MonthNames[ymd.month-1];
    }
    else if (operandstrlc=='mmmmm') {
      result += MonthNames[ymd.month-1].charAt(0);
    }
    else if (operandstrlc=='h') {
      result += hrs+'';
    }
    else if (operandstrlc=='h]') {
      result += ehrs+'';
    }
    else if (operandstrlc=='mmin') {
      cval = (1000 + mins)+'';
      result += cval.substr(2);
    }
    else if (operandstrlc=='mm]') {
      if (emins < 100) {
        cval = (1000 + emins)+'';
        result += cval.substr(2);
      }
      else {
        result += emins+'';
      }
    }
    else if (operandstrlc=='min') {
      result += mins+'';
    }
    else if (operandstrlc=='m]') {
      result += emins+'';
    }
    else if (operandstrlc=='hh') {
      cval = (1000 + hrs)+'';
      result += cval.substr(2);
    }
    else if (operandstrlc=='s') {
      cval = Math.floor(secs);
      result += cval+'';
    }
    else if (operandstrlc=='ss') {
      cval = (1000 + Math.floor(secs))+'';
      result += cval.substr(2);
    }
    else if (operandstrlc=='am/pm' || operandstrlc=='a/p') {
      result += ampmstr;
    }
    else if (operandstrlc=='ss]') {
      if (esecs < 100) {
        cval = (1000 + Math.floor(esecs))+'';
        result += cval.substr(2);
      }
      else {
        cval = Math.floor(esecs);
        result += cval+'';
      }
    }
  }
  else if (op == scfn.commands.section) {
    // end of section
    break;
  }

  else if (op == scfn.commands.comparison) {
    // ignore
    continue;
  }

  else {
    result += '!! Parse error.!!';
  }
}

if (textcolor) {
  result = '<span style="color:'+textcolor+';">'+result+'</span>';
}
if (textstyle) {
  result = '<span style="'+textstyle+';">'+result+'</span>';
}

//console.log(result)

return result;

};

/* *******************

FormatNumber.parse_format_string(format_defs, format_string)

Takes a format string (e.g., "#,##0.00_);(#,##0.00)") and fills in format_defs with the parsed info

format_defs
["#,##0.0"]->{} - elements in the hash are one hash for each format
.operators->[] - array of operators from parsing the format string (each a number)
.operands->[] - array of corresponding operators (each usually a string)
.sectioninfo->[] - one hash for each section of the format
.start
.integerdigits
.fractiondigits
.commas
.percent
.thousandssep
.hasdates
.hascomparison - true if any section has [<100], etc.

************************* */

FormatNumber.parse_format_string = function(format_defs, format_string) {

  var scfn = FormatNumber;

  var format, section, sectioninfo;
  var integerpart = 1; // start out in integer part
  var lastwasinteger; // last char was an integer placeholder
  var lastwasslash; // last char was a backslash - escaping following character
  var lastwasasterisk; // repeat next char
  var lastwasunderscore; // last char was _ which picks up following char for width
  var inquote, quotestr; // processing a quoted string
  var inbracket, bracketstr, bracketdata; // processing a bracketed string
  var ingeneral, gpos; // checks for characters "General"
  var ampmstr, part; // checks for characters "A/P" and "AM/PM"
  var indate; // keeps track of date/time placeholders
  var chpos; // character position being looked at
  var ch; // character being looked at

  if (format_defs[format_string]) return; // already defined - nothing to do

  format = {operators: [], operands: [], sectioninfo: [{}]}; // create info structure for this format
  format_defs[format_string] = format; // add to other format definitions

  section = 0; // start with section 0
  sectioninfo = format.sectioninfo[section]; // get reference to info for current section
  sectioninfo.sectionstart = 0; // position in operands that starts this section
  sectioninfo.integerdigits = 0; // number of integer-part placeholders
  sectioninfo.fractiondigits = 0; // fraction placeholders
  sectioninfo.commas = 0; // commas encountered, to handle scaling
  sectioninfo.percent = 0; // times to scale by 100

  for (chpos=0; chpos<format_string.length; chpos++) { // parse
    ch = format_string.charAt(chpos); // get next char to examine
    if (inquote) {
      if (ch == '"') {
        inquote = 0;
        format.operators.push(scfn.commands.copy);
        format.operands.push(quotestr);
        continue;
      }
      quotestr += ch;
      continue;
    }
    if (inbracket) {
      if (ch==']') {
        inbracket = 0;
        bracketdata=FormatNumber.parse_format_bracket(bracketstr);
        if (bracketdata.operator==scfn.commands.separator) {
          sectioninfo.thousandssep = 1; // explicit [,]
          continue;
        }
        if (bracketdata.operator==scfn.commands.date) {
          sectioninfo.hasdate = 1;
        }
        if (bracketdata.operator==scfn.commands.comparison) {
          format.hascomparison = 1;
        }
        format.operators.push(bracketdata.operator);
        format.operands.push(bracketdata.operand);
        continue;
      }
      bracketstr += ch;
      continue;
    }

    if (lastwasslash) {
      format.operators.push(scfn.commands.copy);
      format.operands.push(ch);
      lastwasslash=false;
      continue;
    }

    if (lastwasasterisk) {
      format.operators.push(scfn.commands.copy);
      format.operands.push(ch+ch+ch+ch+ch); // do 5 of them since no real tabs
      lastwasasterisk=false;
      continue;
    }

    if (lastwasunderscore) {
      format.operators.push(scfn.commands.copy);
      format.operands.push(' ');
      lastwasunderscore=false;
      continue;
    }

    if (ingeneral) {
      if ('general'.charAt(ingeneral)==ch.toLowerCase()) {
        ingeneral++;
        if (ingeneral == 7) {
          format.operators.push(scfn.commands.general);
          format.operands.push(ch);
          ingeneral=0;
        }
        continue;
      }
      ingeneral = 0;
    }

    // last char was part of a date placeholder
    if (indate) {
      //console.log('foo')
      if (indate.charAt(0)==ch) { // another of the same char
        indate += ch; // accumulate it
        continue;
      }
      format.operators.push(scfn.commands.date); // something else, save date info
      format.operands.push(indate);
      sectioninfo.hasdate=1;
      indate = '';
    }
    if (ampmstr) {
      ampmstr += ch;
      part=ampmstr.toLowerCase();
      if (part!='am/pm'.substring(0,part.length) && part!='a/p'.substring(0,part.length)) {
        ampstr='';
      }
      else if (part=='am/pm' || part=='a/p') {
        format.operators.push(scfn.commands.date);
        format.operands.push(ampmstr);
        ampmstr = '';
      }
      continue;
    }
    if (ch=='#' || ch=='0' || ch=='?') { // placeholder
    if (integerpart) {
      sectioninfo.integerdigits++;
      if (sectioninfo.commas) { // comma inside of integer placeholders
        sectioninfo.thousandssep = 1; // any number is thousands separator
        sectioninfo.commas = 0; // reset count of "thousand" factors
      }
      lastwasinteger = 1;
      format.operators.push(scfn.commands.integer_placeholder);
      format.operands.push(ch);
    }
    else {
      sectioninfo.fractiondigits++;
      format.operators.push(scfn.commands.fraction_placeholder);
      format.operands.push(ch);
    }
  } else if (ch == '.') {
    lastwasinteger = 0;
    format.operators.push(scfn.commands.decimal);
    format.operands.push(ch);
    integerpart = 0;
  } else if (ch === '$') {
    lastwasinteger = 0;
    format.operators.push(scfn.commands.currency);
    format.operands.push(ch);
  } else if (ch==',') {
    if (lastwasinteger) {
      sectioninfo.commas++;
    } else {
      format.operators.push(scfn.commands.copy);
      format.operands.push(ch);
    }
  } else if (ch=='%') {
    lastwasinteger = 0;
    sectioninfo.percent++;
    format.operators.push(scfn.commands.copy);
    format.operands.push(ch);
  } else if (ch=='"') {
    lastwasinteger = 0;
    inquote = 1;
    quotestr = '';
  } else if (ch=='[') {
    lastwasinteger = 0;
    inbracket = 1;
    bracketstr = '';
  } else if (ch=='\\') {
    lastwasslash = 1;
    lastwasinteger = 0;
  } else if (ch=='*') {
    lastwasasterisk = 1;
    lastwasinteger = 0;
  } else if (ch=='_') {
    lastwasunderscore = 1;
    lastwasinteger = 0;
  } else if (ch==';') {
    section++; // start next section
    format.sectioninfo[section] = {}; // create a new section
    sectioninfo = format.sectioninfo[section]; // get reference to info for current section
    sectioninfo.sectionstart = 1 + format.operators.length; // remember where it starts
    sectioninfo.integerdigits = 0; // number of integer-part placeholders
    sectioninfo.fractiondigits = 0; // fraction placeholders
    sectioninfo.commas = 0; // commas encountered, to handle scaling
    sectioninfo.percent = 0; // times to scale by 100
    integerpart = 1; // reset for new section
    lastwasinteger = 0;
    format.operators.push(scfn.commands.section);
    format.operands.push(ch);
  } else if (ch.toLowerCase()=='g') {
    ingeneral = 1;
    lastwasinteger = 0;
  } else if (ch.toLowerCase()=='a') {
    ampmstr = ch;
    lastwasinteger = 0;
  } else if ('dmyhHs'.indexOf(ch)>=0) {
    //console.log('foo')
    indate = ch;
  } else {
    lastwasinteger = 0;
    format.operators.push(scfn.commands.copy);
    format.operands.push(ch);
  }
}

// last char was part of unsaved date placeholder
if (indate) {
  format.operators.push(scfn.commands.date);
  format.operands.push(indate);
  sectioninfo.hasdate = 1;
}

return;

}


/* *******************

bracketdata = FormatNumber.parse_format_bracket(bracketstr)

Takes a bracket contents (e.g., "RED", ">10") and returns an operator and operand

bracketdata->{}
.operator
.operand

************************* */

FormatNumber.parse_format_bracket = function(bracketstr) {

  var scfn = FormatNumber;

  var bracketdata={};
  var parts;

  // currency
  if (bracketstr.charAt(0)=='$') {
    bracketdata.operator = scfn.commands.currency;
    parts=bracketstr.match(/^\$(.+?)(\-.+?){0,1}$/);
    if (parts) {
      bracketdata.operand = parts[1] || DefaultCurrency || '$';
    } else {
      bracketdata.operand = bracketstr.substring(1) || DefaultCurrency || '$';
    }
  } else if (bracketstr=='?$') {
    bracketdata.operator = scfn.commands.currency;
    bracketdata.operand = '[?$]';
  } else if (AllowedColors[bracketstr.toUpperCase()]) {
    bracketdata.operator = scfn.commands.color;
    bracketdata.operand = AllowedColors[bracketstr.toUpperCase()];
  } else if (parts=bracketstr.match(/^style=([^']*)$/)) {
    // [style=...]
    bracketdata.operator = scfn.commands.style;
    bracketdata.operand = parts[1];
  }
  else if (bracketstr==',') {
    bracketdata.operator = scfn.commands.separator;
    bracketdata.operand = bracketstr;
  }
  else if (AllowedDates[bracketstr.toUpperCase()]) {
    bracketdata.operator = scfn.commands.date;
    bracketdata.operand = AllowedDates[bracketstr.toUpperCase()];
  }
  else if (parts=bracketstr.match(/^[<>=]/)) { // comparison operator
    parts=bracketstr.match(/^([<>=]+)(.+)$/); // split operator and value
    bracketdata.operator = scfn.commands.comparison;
    bracketdata.operand = parts[1]+':'+parts[2];
  }
  else { // unknown bracket
    bracketdata.operator = scfn.commands.copy;
    bracketdata.operand = '['+bracketstr+']';
  }

  return bracketdata;

}

export function text(value, format, currency_char) {
  return FormatNumber.formatNumberWithFormat(value, format, currency_char);
}
