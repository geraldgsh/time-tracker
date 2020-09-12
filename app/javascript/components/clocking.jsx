import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";

function Clocking() {
  const initialState = {
    clockIn: '-',
    clockOut: '-',
  }
  const [clocked, setClocked] = useState(false);
  const [clock, setClock] = useState(initialState);
  const [error, setError] = useState(null)

  const handleClick = () => {
    setClocked(!clocked);
  }

  function clickIn() {
    if (clock.clockOut != '-') {
      setClock({clockOut: '-'})
    }
    setClock(prevState => ({
      ...prevState,
      clockIn: moment(new Date()).format("LT").toString()
    }));
  }

  function clickOut() {
    setClock(previousState => ({
      ...previousState,
      clockOut: moment(new Date()).format("LT").toString()
    }));
  }

  useEffect(() => {
    console.log("clockOut:" + clock.clockIn, "clockOut:" + clock.clockOut)
    if (clock.clockIn != '-' && clock.clockOut != '-') {
      const clockin = clock.clockIn;
      const clockout = clock.clockOut;
      setTimeout(() => { 
        axios.post('/api/v1/clocks', {clockin, clockout})
        .then((response) => console.log(response.data))
        .catch(err => {setError(err.response.statusText);})
      }, 1000);
    }    
  }, [clock.clockOut, error]);

  const clockedin = (
    <div className="row mt-3">
      <button className="button is-success is-fullwidth" onClick={clickIn}>Clock-in</button>
    </div>
  )

  const clockedout = (
    <div className="row mt-3">
      <button className="button is-danger is-fullwidth" onClick={clickOut}>Clock-out</button>
    </div>
  )
  return (
    <>
      <div className="row mt-5">
        <div className="columns">
          <div className="column clocks">
            <h1 className="is-6">Clock in</h1>
            <p className="time">{clock.clockIn}</p>
          </div>
          <div className="column clocks">
            <h1 className="is-6">Clock out</h1>
            <p className="time">{clock.clockOut}</p>
          </div>
        </div>
      </div>
      <div onClick={handleClick}>
        {clocked ? clockedout : clockedin}
      </div>
      <div className="has-text-danger">
        {error ? error : null}
      </div>
    </>
    );
  }

  export default Clocking;