import Head from 'next/head'
import TimePicker from 'react-bootstrap-time-picker';
import { Container, Row, Card, Button } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";


export default function Home() {
  const [timecome1, settimecome1] = useState(23400);
  const [timegehen1, settimegehen1] = useState(53280);
  const [workhours1, setworkhours1] = useState(0);

  const [timecome2, settimecome2] = useState(23400);
  const [timegehen2, settimegehen2] = useState(53280);
  const [workhours2, setworkhours2] = useState(0);

  const [timecome3, settimecome3] = useState(23400);
  const [timegehen3, settimegehen3] = useState(53280);
  const [workhours3, setworkhours3] = useState(0);

  const [timecome4, settimecome4] = useState(23400);
  const [timegehen4, settimegehen4] = useState(53280);
  const [workhours4, setworkhours4] = useState(0);

  const [timecome5, settimecome5] = useState(23400);
  const [timegehen5, settimegehen5] = useState(53280);
  const [workhours5, setworkhours5] = useState(0);

  useEffect(() => {
    setworkhours1(setRightTime(timecome1, timegehen1))
    setworkhours2(setRightTime(timecome2, timegehen2))
    setworkhours3(setRightTime(timecome3, timegehen3))
    setworkhours4(setRightTime(timecome4, timegehen4))
    setworkhours5(setRightTime(timecome5, timegehen5))
  })

  function setRightTime(come, gehen) {
    var time = (gehen - come)/60/60;
    if (time >= 9.75){
      return (time - 0.75);
    } else {
      if (time => 6) {
        return (time - 0.50);
      }
    }
  }

  var wochenstunden = Math.round(((workhours1 - 7.8)+(workhours2 - 7.8)+(workhours3 - 7.8)+(workhours4 - 7.8)+(workhours5 - 7.8)) * 100) / 100;
  

  
  return (
    <Container className="md-container">
      <Head>
        <title>Stundenrechner By Marlon Gehrmann</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1>
          Willkommen zum Stundenrechner / <small>SWM</small>
        </h1>
        <Container>
          <Row>
          <Card style={{ width: '12rem', margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title>Montag</Card.Title>
            <TimePicker value={timecome1} onChange={el => settimecome1(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen1} onChange={el => settimegehen1(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4>{workhours1.toFixed(2)}</h4>
              Überstunden: <h4>{Math.round((workhours1 - 7.8) * 100) / 100}</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem', margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title>Dienstag</Card.Title>
            <TimePicker value={timecome2} onChange={el => settimecome2(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen2} onChange={el => settimegehen2(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4>{workhours2.toFixed(2)}</h4>
              Überstunden: <h4>{Math.round((workhours2 - 7.8) * 100) / 100}</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem', margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title>Mittwoch</Card.Title>
            <TimePicker value={timecome3} onChange={el => settimecome3(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen3} onChange={el => settimegehen3(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4>{workhours3.toFixed(2)}</h4>
              Überstunden: <h4>{Math.round((workhours3 - 7.8) * 100) / 100}</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem', margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title>Donnerstag</Card.Title>
            <TimePicker value={timecome4} onChange={el => settimecome4(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen4} onChange={el => settimegehen4(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4>{workhours4.toFixed(2)}</h4>
              Überstunden: <h4>{Math.round((workhours4 - 7.8) * 100) / 100}</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '12rem', margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title>Freitag</Card.Title>
            <TimePicker value={timecome5} onChange={el => settimecome5(el)} start="6:30" end="18:00" step="15" format={24} style={{ marginBottom: '0.5rem' }} />
            <TimePicker value={timegehen5} onChange={el => settimegehen5(el)} start="6:30" end="18:00" step="15" format={24} />
            <Card.Text>Stunden:<br />
              <h4>{workhours5.toFixed(2)}</h4>
              Überstunden: <h4>{Math.round((workhours5 - 7.8) * 100) / 100}</h4>
            </Card.Text>
            </Card.Body>
          </Card>
          </Row>
          <h3>Wochenstunden Kontingent: {wochenstunden} Std.</h3>
        </Container>
      </Container>

      <footer className="cntr-footer">
          Created with ❤ by Marlon Gehrmann
      </footer>
      
    </Container>
  )
}