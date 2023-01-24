import React from 'react';
import { useTimer,useStopwatch } from 'react-timer-hook';

function Temporizador({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
   
    isRunning,
    start,
    pause,
    resume,
    restart,
  }  = useStopwatch({ autoStart: true });
  


  return (
    <div className='mt-5' style={{textAlign: 'center'}}>
     <h2>Tu rutina ha tenido una duracion de:</h2>
      <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>

      <div className='flex gap-3 justify-center'>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      {/* <button onClick={resume}>Resume</button> */}
      {/* <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button> */}
      </div>
    </div>
  );
}


export default Temporizador