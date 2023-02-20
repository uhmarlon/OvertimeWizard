  import Home from "../pages";

  export function setRightTime(come:any, gehen:any) {
    var time = (gehen - come)/60;

    if (time >= 6 && time <= 6.5) 
    {
      return 6;
    }
    else if (time > 6.5 && time <= 9.5)
    {
      return time - 0.5;
    }
    else if (time > 9.5 && time <= 9.75)
    {
      return 9;
    }
    else if (time > 9.75)
    {
      return time - 0.75;
    }
    return time;
  
  }

  export function setRightOvertime(time:any)
  {
    return time -7.8;
  }

  export function formTimestamp(timestamp : any) {
    if (typeof timestamp === "string" && timestamp.length > 0) {
      var parts = timestamp.split(":");
      var hours = Number(parts[0]);
      var minutes = Number(parts[1]);
      if (!isNaN(hours) && !isNaN(minutes)) {
        var totalMinutes = hours * 60 + minutes;
        return totalMinutes;
      } else {
        return 390; // 6:30 AM in minutes if the time is invalid
      }
    } else {
      return 390; // 6:30 AM in minutes if the time is invalid
    }
  }

  export function reverseFormTimestamp(minutes: number) {
    if (typeof minutes === "number" && !isNaN(minutes)) {
      var hours = Math.floor(minutes / 60);
      var mins = minutes % 60;
      var hh = hours < 10 ? "0" + hours : hours.toString();
      var mm = mins < 10 ? "0" + mins : mins.toString();
      return hh + ":" + mm;
    } else {
      return "06:30"; // default value if the input is invalid
    }
  }

  export function minutesToHours(minutes: number) {
    if (typeof minutes === "number" && !isNaN(minutes)) {
      return (minutes / 60).toFixed(2);
    } else {
      return "0.00"; // default value if the input is invalid
    }
  }




