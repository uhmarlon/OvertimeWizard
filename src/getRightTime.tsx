export default function setRightTime(come:any, gehen:any) {
    var time = (gehen - come)/60/60;

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
