
/* description: Parses end executes spreadSCOPE formula expressions. */

/* lexical grammar */
%lex

alpha                       [a-zA-Z]
digit                       [0-9]
esc                         "\""
int                         "-"?(?:[0-9]|[1-9][0-9]+)
exp                         (?:[eE][-+]?[0-9]+)
frac                        (?:\.[0-9]+)

%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"TRUE"                return 'TRUE'
"FALSE"               return 'FALSE'
"true"                return 'TRUE'
"false"               return 'FALSE'
"True"                return 'TRUE'
"False"               return 'FALSE'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"&"                   return '&'
"^"                   return '^'
"("                   return '('
")"                   return ')'
">="                  return ">="
"<="                  return "<="
"<>"                  return "<>"
"="                   return "="
">"                   return ">"
"<"                   return "<"
"{"                   return "{"
"}"                   return "}"
"!"                   return "!"
","                   return ","
":"                   return ":"
";"                   return ";"
"%"                   return "%"
[A-Za-z](?=[(])                    {return 'FUNC';}
[A-Za-z][A-Za-z0-9\.]+(?=[(])                    {return 'FUNC';}
\"(?:\"\"|[^"])*\"    yytext = yytext.substr(1,yyleng-2).replace(/\"\"/g, "\""); return "STRING";
\$\'(?:\'\'|[^'])*\'\!    yytext = yytext.substr(2,yyleng-3).replace(/\"\"/g, "\""); return "SCOPE";
\'(?:\'\'|[^'])*\'\!    yytext = yytext.substr(1,yyleng-3).replace(/\"\"/g, "\""); return "SCOPE";
[a-zA-Z]([a-zA-Z0-9_.$]+)?\!  yytext = yytext.slice(0, -1); return "SCOPE"
\$([a-zA-Z])([a-zA-Z0-9_.$]+)?\!  yytext = yytext.slice(1, -1); return "SCOPE"
([\[\]a-zA-Z0-9_.$^@\(]+)  return 'IDENT'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */
%left '=' '>=' '<=' '>' '<' '<>'
%left '&'
%left '+' '-'
%left '*' '/'
%left '^'
%left ':'
%left UMINUS

%right '%'


%start expressions

%% /* language grammar */

expressions
  : e EOF
      { return $1; }
  | '=' e EOF
      { return $2; }
  ;

e
  : e '+' e
      {$$ = { type: "operator", subtype: 'infix-add', operands:[$1, $3]}; }
  | e '-' e
      {$$ = { type: "operator", subtype: 'infix-subtract', operands:[$1, $3]}; }
  | e '*' e
      {$$ = { type: "operator", subtype: 'infix-multiply', operands:[$1, $3]}; }
  | e '/' e
      {$$ = { type: "operator", subtype: 'infix-divide', operands:[$1, $3] }; }
  | e '^' e
      {$$ = { type: "operator", subtype: 'infix-power', operands:[$1, $3] }; }
  | e '<>' e
      {$$ = { type: "operator", subtype: 'infix-ne', operands:[$1, $3] }; }
  | e '=' e
      {$$ = { type: "operator", subtype: 'infix-eq', operands:[$1, $3] }; }
  | e '>' e
      {$$ = { type: "operator", subtype: 'infix-gt', operands:[$1, $3] }; }
  | e '<' e
      {$$ = { type: "operator", subtype: 'infix-lt', operands:[$1, $3] }; }
  | e '>=' e
      {$$ = { type: "operator", subtype: 'infix-gte', operands:[$1, $3] }; }
  | e '<=' e
      {$$ = { type: "operator", subtype: 'infix-lte', operands:[$1, $3] }; }
  | '+' e
      {$$ = { type: "operator", subtype: 'prefix-plus', operands:[$2] }; }
  | e '&' e
      {$$ = { type: "operator", subtype: 'infix-concat', operands:[$1, $3] }; }
  | '-' e
      {$$ = { type: "operator", subtype: 'prefix-minus', operands:[$2] }; }
  | '(' e ')'
      {$$ = { type: 'group', exp:$2 }; }
  | e ':' e
      {$$ = { type: 'range', subtype: 'local', topLeft:$1, bottomRight:$3 }; }
  | IDENT
      { $$ = { type: 'variable', name:$1 }; }
  | SCOPE IDENT
      { $$ = { type: 'variable', scope: $1, name: $2 }; }
  | func
      { $$ = $1; }
  | array_literal
      { $$ = $1; }
  | TRUE
      {$$ = { type: 'value', subtype: 'boolean', value: true }; }
  | FALSE
      {$$ = { type: 'value', subtype: 'boolean', value: false }; }
  | STRING
      {$$ = { type: 'value', subtype: 'string', value:String(yytext)}; }
  | NUMBER '%'
      {$$ = { type: 'value', subtype: 'number', value:$1/100 }; }
  | NUMBER
      {$$ = { type: 'value', subtype: 'number', value:Number(yytext) }; }
  ;

range
   : e ':' e
   ;

param_list
  :  e
      { $$ = [$1]; }
  | param_list ',' e
      { $$ = $1.concat([$3]); }
  | param_list ';' param_list
      { $$ = ($3[0].subtype !== 'array') ? [{ type: 'value', subtype: 'array', items:$1 }, { type: 'value', subtype: 'array', items:$3 }] : [{ type: 'value', subtype: 'array', items:$1 }].concat($3); }
  ;

func
  : FUNC '(' param_list ')'
    { $$ = { type: 'function', name: $1, args:$3 }; }
  | FUNC '(' ')'
    { $$ = { type: 'function', name: $1, args:[] }; }
  ;

array_literal
  : '{' param_list '}'
    { $$ = { type: 'value', subtype: 'array', items:$2 }; }
  ;
