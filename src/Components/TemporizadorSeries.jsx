import React from 'react';
import { useTimer,useStopwatch } from 'react-timer-hook';

function TemporizadorSeries({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
    reset,
  }  = useStopwatch({ autoStart: false});
  


  return (
    <div className='mt-5' style={{textAlign: 'center'}}>
     <h2>Calcula tus descansos entre series</h2>
      <div style={{fontSize: '90px'}}>
       <span>{minutes}</span>:<span>{seconds}</span>
      </div>

      <div className='flex gap-3 justify-center'>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      {/* <button onClick={resume}>Resume</button> */}
      { <button onClick={reset}>Restart</button> }
      </div>
    </div>
  );
}


export default TemporizadorSeries