"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllowedColors = exports.DefaultCurrency = exports.DecimalChar = exports.SeparatorChar = exports.MaxRows = exports.MaxCols = exports.pi = exports.τ = exports.PM1 = exports.PM = exports.AM1 = exports.AM = exports.MonthNames3 = exports.MonthNames = exports.DayNames3 = exports.DayNames = exports.AllowedDates = exports.MilliSecondsInDay = exports.DaysInYear = exports.SecondsInDay = exports.SecondsInHour = exports.SecondsInMinute = exports.MinutesInDay = exports.MinutesInHour = exports.JulianOffset = exports.d1900 = void 0;
// Copyright 2015-2018 FormBucket LLC
// Shared constants
var d1900 = new Date(1900, 0, 1),
    JulianOffset = 2415019,
    MinutesInHour = 60,
    MinutesInDay = 1440,
    SecondsInMinute = 60,
    SecondsInHour = 3600,
    SecondsInDay = 86400,
    DaysInYear = 365.25,
    MilliSecondsInDay = 86400000,
    AllowedDates = {
  H: "h]",
  M: "m]",
  MM: "mm]",
  S: "s]",
  SS: "ss]"
},
    DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    DayNames3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    MonthNames3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    AM = "AM",
    AM1 = "A",
    PM = "PM",
    PM1 = "P",
    // Circle Constants
τ = 6.28318530717958,
    // http://tauday.com/tau-manifesto
pi = 3.14159265358979,
    // Address System Constants
MaxCols = 16384,
    // 14 bits, 2^14
MaxRows = 1048576,
    // 20 bits, 2^20
// Formatting Constants
SeparatorChar = ",",
    DecimalChar = ".",
    DefaultCurrency = "$",
    // the currency string used if none specified
AllowedColors = {
  BLACK: "#000000",
  BLUE: "#0000FF",
  CYAN: "#00FFFF",
  GREEN: "#00FF00",
  MAGENTA: "#FF00FF",
  RED: "#FF0000",
  WHITE: "#FFFFFF",
  YELLOW: "#FFFF00"
};
exports.AllowedColors = AllowedColors;
exports.DefaultCurrency = DefaultCurrency;
exports.DecimalChar = DecimalChar;
exports.SeparatorChar = SeparatorChar;
exports.MaxRows = MaxRows;
exports.MaxCols = MaxCols;
exports.pi = pi;
exports.τ = τ;
exports.PM1 = PM1;
exports.PM = PM;
exports.AM1 = AM1;
exports.AM = AM;
exports.MonthNames3 = MonthNames3;
exports.MonthNames = MonthNames;
exports.DayNames3 = DayNames3;
exports.DayNames = DayNames;
exports.AllowedDates = AllowedDates;
exports.MilliSecondsInDay = MilliSecondsInDay;
exports.DaysInYear = DaysInYear;
exports.SecondsInDay = SecondsInDay;
exports.SecondsInHour = SecondsInHour;
exports.SecondsInMinute = SecondsInMinute;
exports.MinutesInDay = MinutesInDay;
exports.MinutesInHour = MinutesInHour;
exports.JulianOffset = JulianOffset;
exports.d1900 = d1900;
