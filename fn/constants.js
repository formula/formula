"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright 2015 JC Fisher

// Shared constants
var d1900 = exports.d1900 = new Date(1900, 0, 1),
    JulianOffset = exports.JulianOffset = 2415019,
    MinutesInHour = exports.MinutesInHour = 60,
    MinutesInDay = exports.MinutesInDay = 1440,
    SecondsInMinute = exports.SecondsInMinute = 60,
    SecondsInHour = exports.SecondsInHour = 3600,
    SecondsInDay = exports.SecondsInDay = 86400,
    DaysInYear = exports.DaysInYear = 365.25,
    MilliSecondsInDay = exports.MilliSecondsInDay = 86400000,
    AllowedDates = exports.AllowedDates = { H: "h]", M: "m]", MM: "mm]", S: "s]", SS: "ss]" },
    DayNames = exports.DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    DayNames3 = exports.DayNames3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    MonthNames = exports.MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    MonthNames3 = exports.MonthNames3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    AM = exports.AM = "AM",
    AM1 = exports.AM1 = "A",
    PM = exports.PM = "PM",
    PM1 = exports.PM1 = "P",


// Circle Constants
τ = exports.τ = 6.28318530717958,
    // http://tauday.com/tau-manifesto
pi = exports.pi = 3.14159265358979,


// Address System Constants
MaxCols = exports.MaxCols = 16384,
    // 14 bits, 2^14
MaxRows = exports.MaxRows = 1048576,
    // 20 bits, 2^20

// Formatting Constants
SeparatorChar = exports.SeparatorChar = ",",
    DecimalChar = exports.DecimalChar = ".",
    DefaultCurrency = exports.DefaultCurrency = "$",
    // the currency string used if none specified
AllowedColors = exports.AllowedColors = {
  BLACK: "#000000",
  BLUE: "#0000FF",
  CYAN: "#00FFFF",
  GREEN: "#00FF00",
  MAGENTA: "#FF00FF",
  RED: "#FF0000",
  WHITE: "#FFFFFF",
  YELLOW: "#FFFF00"
};