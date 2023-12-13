import React, { useEffect, useState } from 'react';
import "./MainCompStyle.css";

const MainComp = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [save,setSave] = useState([])

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setSecond(0);
            setMinute((prevMinute) => {
              if (prevMinute === 59) {
                setMinute(0);
                setHour((prevHour) => prevHour + 1);
              }
              return prevMinute + 1;
            });
          }
          return prevSecond + 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleSave(){
    setSave((prevSave) => [...prevSave, { hour, minute, second }])
  }

  function handleReset(){
    setSecond(0)
    setMinute(0)
    setHour(0)
    setSave([])
    setIsRunning(false)
  }

  const formattedSeconds = second < 10 ? `0${second}` : second;
  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  const formattedHour = hour < 10 ? `0${hour}` : hour;

  return (
    <>
    <div className='container'>
      <div className='main-section'>
        <h1>{formattedHour}:{formattedMinute}:{formattedSeconds}</h1>
        <button className='btn start' onClick={handleStart}>Start</button>
        <button className='btn stop' onClick={handleStop}>Stop</button>
        <button className='btn save' onClick={handleSave}>Save</button>
        <button className='btn reset' onClick={handleReset}>Reset</button>
    </div>
    <div className='saved-data-section'>
      <ul>
        {save.length > 0 ? save.map((data,index)=>{
            const {hour,minute,second} = data
            return (
                <li key={index}>#{index+1} - Saved Time {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}</li>
            ) 
        }) : <li>No saved time avaliable</li>}
    
      </ul>
      </div>
      </div>
      </>
  );
};

export default MainComp;
