  import Home from "../pages";

  var fcome = 0;
  var lgehen = 0;

  export function setBounds(firstCome:any, lastGehen:any) {
    fcome = firstCome;
    lgehen = lastGehen;
  }

  export function setRightTime(come:any, gehen:any) {
    
    if (come < fcome)
    {
      come = fcome;
    }
    else if (gehen > lgehen)
    {
      gehen = lgehen;
    }
    else if (come > lgehen || gehen < fcome || gehen < come)
    {
      gehen = 0;
      come = 0;
    }

    var time = gehen - come;

    if (time >= 360 && time <= 390) 
    {
      time = 360;
    }
    else if (time > 390 && time <= 570)
    {
      time = time - 30;
    }
    else if (time > 570 && time <= 585)
    {
      time = 540;
    }
    else if (time > 585)
    {
      time = time - 45;
    }
    return time / 60;
  
  }

  export function setRightOvertime(time:any, hoursToWork:any)
  {
    return time - hoursToWork;
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




