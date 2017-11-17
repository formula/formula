// Copyright 2015 JC Fisher

// Shared constants
export let d1900 = new Date(1900, 0, 1),
  JulianOffset = 2415019,
  MinutesInHour = 60,
  MinutesInDay = 1440,
  SecondsInMinute = 60,
  SecondsInHour = 3600,
  SecondsInDay = 86400,
  DaysInYear = 365.25,
  MilliSecondsInDay = 86400000,
  AllowedDates = {H: "h]", M: "m]", MM: "mm]", S: "s]", SS: "ss]"},
  DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  DayNames3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  MonthNames3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  AM = "AM",
  AM1 = "A",
  PM = "PM",
  PM1 = "P",

  // Circle Constants
  τ = 6.28318530717958, // http://tauday.com/tau-manifesto
  pi = 3.14159265358979,

  // Address System Constants
  MaxCols = 16384,    // 14 bits, 2^14
  MaxRows = 1048576,  // 20 bits, 2^20

  // Formatting Constants
  SeparatorChar = ",",
  DecimalChar = ".",
  DefaultCurrency = "$", // the currency string used if none specified
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
