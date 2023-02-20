import Head from 'next/head'
import Image from 'next/image'
import TimePicker from 'react-bootstrap-time-picker';
import { Container, Row, Card, Button, Form } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { setRightTime, formTimestamp, reverseFormTimestamp } from "../util/getRightTime";
import React from 'react';



export default function Home() {
  const [timecome, settimecome] = useState({ 1: 390, 2: 390, 3: 390, 4: 390, 5: 390 });
  const [timegehen, settimegehen] = useState({ 1: 900, 2: 900, 3: 900, 4: 900, 5: 900 });
  const [workhours, setworkhours] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [week, setWeek] = useState<number>(0)
  const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
  var currentDay = new Date().getDay();

  useEffect(() => {
    const storedTimecome = JSON.parse(localStorage.getItem("timecome"));
    if (storedTimecome) {
      settimecome(storedTimecome);
    }

    const storedTimegehen = JSON.parse(localStorage.getItem("timegehen"));
    if (storedTimegehen) {
      settimegehen(storedTimegehen);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timecome", JSON.stringify(timecome));
    localStorage.setItem("timegehen", JSON.stringify(timegehen));
    setworkhours({ 1: setRightTime(timecome[1], timegehen[1]),
    2: setRightTime(timecome[2], timegehen[2]),
    3: setRightTime(timecome[3], timegehen[3]),
    4: setRightTime(timecome[4], timegehen[4]),
    5: setRightTime(timecome[5], timegehen[5]) })
  }, [timecome, timegehen]);
  
  useEffect(() => {
    const currentDate: Date = new Date()
    const startOfYear: Date = new Date(currentDate.getFullYear(), 0, 0)
    const diffInMilliseconds: number = currentDate.getTime() - startOfYear.getTime()
    const diffInDays: number = diffInMilliseconds / 86400000
    const weekNumber: number = Math.ceil(diffInDays / 7)
    setWeek(weekNumber)

    var hourTextField:any = document.getElementsByClassName("hourTextField");
    for (var i = 0; i < hourTextField.length; i++) {
      if (hourTextField[i].textContent.startsWith("-")) {
        hourTextField[i].style.color = "red";
      } else {
        hourTextField[i].style.color = "green";
      }
    }

    if(currentDay > 0 && currentDay < 6)
    {
      var card = document.getElementById(days[currentDay-1]);
      card.classList.remove("border");
      card.classList.add("border-4");
    }
  })

  var wochenstunden = "5"
  
  // Math.round(((workhours1 - 7.8)+(workhours2 - 7.8)+(workhours3 - 7.8)+(workhours4 - 7.8)+(workhours5 - 7.8)) * 100) / 100;
  

  
  return (
    <>
      <Head>
        <title>SWM Stundenrechner</title>
        <link rel="icon" href="/swmstreifen.png" />
      </Head>


      <h1 className="mt-12 font-bold text-4xl md:text-5xl mb-4 text-center">Willkommen zum Stundenrechner der <br/>
        <Image className='object-center' src="/swmicon.svg" alt="SWM" width={240} height={80} />
      </h1>

      <div className='grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-6 xl:grid-cols-6 pt-1 pb-2 lg:pb-5'>
        <div id='Montag' className="col-span-2 max-w-sm p-6  border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Montag</h5>
            <input
              className='shadow appearance-none border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="time" min="06:30" max="20:00"
              value={reverseFormTimestamp(timecome[1])}
              onChange={el => settimecome({ ...timecome, 1: formTimestamp(el.target.value)})}
            />
            <input
              className='shadow appearance-none border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="time" min="06:30" max="20:00"
              value={reverseFormTimestamp(timegehen[1])}
              onChange={el => settimegehen({ ...timegehen, 1: formTimestamp(el.target.value)})}
            />
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Stunden: <b className='hourTextField'>{workhours[1].toFixed(2)}</b></h6>
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Überstunden: <b className='hourTextField'>{Math.round((workhours[1]) * 100) / 100}</b></h6>
        </div>

        {/* <div id='Dienstag' className="col-span-2 max-w-sm p-6  border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Dienstag</h5>
            <TimePicker value={timecome2} onChange={el => settimecome2(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen2} onChange={el => settimegehen2(el)} start="6:30" end="18:00" step="15" format={24} />
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Stunden: <b className='hourTextField'>{workhours2.toFixed(2)}</b></h6>
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Überstunden: <b className='hourTextField'>{Math.round((workhours2 - 7.8) * 100) / 100}</b></h6>
        </div>

        <div id='Mittwoch' className="col-span-2  max-w-sm p-6  border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Mittwoch</h5>
            <TimePicker value={timecome3} onChange={el => settimecome3(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen3} onChange={el => settimegehen3(el)} start="6:30" end="18:00" step="15" format={24} />
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Stunden: <b className='hourTextField'>{workhours3.toFixed(2)}</b></h6>
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Überstunden: <b className='hourTextField'>{Math.round((workhours3 - 7.8) * 100) / 100}</b></h6>
        </div>

        <div id="Donnerstag" className="col-span-3 max-w-sm p-6 border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Donnerstag</h5>
            <TimePicker value={timecome4} onChange={el => settimecome4(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen4} onChange={el => settimegehen4(el)} start="6:30" end="18:00" step="15" format={24} />
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Stunden: <b className='hourTextField'>{workhours4.toFixed(2)}</b></h6>
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Überstunden: <b className='hourTextField'>{Math.round((workhours4 - 7.8) * 100) / 100}</b></h6>
        </div>

        <div id='Freitag' className="col-span-3 max-w-sm p-6 border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Freitag</h5>
            <TimePicker value={timecome5} onChange={el => settimecome5(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen5} onChange={el => settimegehen5(el)} start="6:30" end="18:00" step="15" format={24} />
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Stunden: <b className='hourTextField'>{workhours5.toFixed(2)}</b></h6>
            <h6 className="font-normal text-xl text-gray-700 dark:text-gray-400">Überstunden: <b className='hourTextField'>{Math.round((workhours5 - 7.8) * 100) / 100}</b></h6>
        </div> */}
      </div>
      <h4 className='text-gray-600'>{week} KW</h4>


      <h4 className="mt-5 font-bold text-4xl md:text-2xl mb-4 text-center">Wochenstunden Kontingent: <b className='hourTextField'>{wochenstunden} Std.</b> <br/><br/>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded object-center" onClick={() => {
          // TODO: Add reset function
              }}>Zurücksetzen</button>
      </h4>

      <footer className="cntr-footer">
          Created with  <a href='Cat.mp4'>❤ </a>  by Marlon Gehrmann and Julian Maier 
      </footer>
      <footer>
      This is not an official app of Stadtwerke München <br/>
      <a href='https://github.com/uhmarlon/Hourscal-SWM' className='text-blue-400'>OPEN SOURCE</a>
      </footer>
      </>
  )
}