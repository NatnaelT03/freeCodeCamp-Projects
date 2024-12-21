import React, { useEffect, useRef } from "react"

export default function App() {

  const audioRef = useRef(null)
  const [brek, setBrek] = React.useState(5)
  const [session, setSession] = React.useState(25)
  const [timer, setTimer] = React.useState(session * 60)
  const [running, setRunning] = React.useState(false)
  const [sessionType, setSessionType] = React.useState(true)
  
  const reset = () => {
    setBrek(5)
    setSession(25)
    setTimer(session * 60)
    setRunning(false)
    setSessionType(true)
    if(audioRef.current){
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }

  useEffect(() => {
    if(running === false){
      setTimer(session * 60)
    } 

  }, [session])

  useEffect(() => {
    let timer;
    if(running){
      timer = setInterval(() => {
        setTimer((prev) => {
          if(prev <= 0){
            if(audioRef.current){
              audioRef.current.play()
            }
            setSessionType((prev) => !prev)
            return (sessionType ? brek : session) * 60
          }
          return prev - 1;

        })
        
      }, 1000)
    }
    else{
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [session, brek, running, sessionType])

  const runchanger = () => {
    setRunning((prev) => !prev)
  }

  const time_change = () => {
    setInterval
  }
  const formatTime= (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
  }
  const incr_decr = (value, operator) => {
    if(!running){
    if (value === "break"){
      if(operator === "increment" && brek < 60){
        setBrek((prev) => prev + 1)
      }
      else if (operator === "decrement" && brek > 1){
        setBrek((prev) => prev - 1)
      }
    }
    else{
      if(operator === "increment" && session < 60){
        setSession((prev) => prev + 1)
      }
      else if (operator === "decrement" && session > 1){
        setSession((prev) => prev - 1)
      }
    }
  }
  }
  return (
    <main>
     <p className="title">25 + 5 Clock</p>
     <div className="length-checker">
        <div className="break">
          <div id="break-label">Break Length</div>
          <div className="button-align">
            <button id="break-decrement" onClick = {() => incr_decr("break", "decrement")}>
              <i class="fa fa-arrow-down fa-2x"></i>
            </button>
            <div id="break-length">{brek}</div>
            <button id="break-increment" onClick = {() => incr_decr("break", "increment")}>
            <i class="fa fa-arrow-up fa-2x"></i>
          </button>
          </div>
        </div>
        <div className="session">
          <div id="session-label">Session Length</div>
          <div className="button-align">
          <button id="session-decrement" onClick = {() => incr_decr("session", "decrement")}>
            <i class="fa fa-arrow-down fa-2x"></i>
          </button>
          <div id="session-length">{session}</div>
          <button id="session-increment" onClick = {() => incr_decr("session", "increment")}>
            <i class="fa fa-arrow-up fa-2x"></i>
          </button>
          </div>
        </div>
     </div>
      <div className="notifier">
        <p id="timer-label">{sessionType ? "Session" : "Break"}</p>
        <div id="time-left">{formatTime(timer)}</div>
      </div>
      <button id="start_stop" onClick={runchanger}>
      <i class="fa fa-play fa-2x"></i>
      <i class="fa fa-pause fa-2x"></i>
      </button>
      <button id="reset" onClick={reset}><i class="fa fa-refresh fa-2x"></i></button>
      <audio ref = {audioRef} id="beep" preload="auto" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </main>
  )
}


