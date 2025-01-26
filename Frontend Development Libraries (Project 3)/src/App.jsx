import React, {useEffect} from "react";
import music from './music1.js'
import music1 from '/Users/mrnt03/Desktop/freeCodeCamp-Projects/Frontend Development Libraries (Project 3)/src/music2.js'


export default function App(){

  const [power, setPower] = React.useState(true)
  const [volume, setVolume] = React.useState(1)
  const [displayValue,setDisplayValue] = React.useState("")
  const [type, setType] = React.useState(true)
  
  const powerOn = () => {
    setPower(!power)
    setDisplayValue(power ? "Power Off" : "Power On")
  }
  const changeType = () => {
    if(power){
    setType(!type)
    setDisplayValue(type ? "Smooth Piano Kit" : "Heater Kit")
    }
  }

  const volumeControl = (e) => {
    if(power){
    setVolume(e.target.value)
    setDisplayValue(`Volume: ${Math.ceil(volume*100)}`)
    }
  }

  const musicPlayer = (e) => {
    const audio = e.target.querySelector('audio')
    if (power){
    audio.play();
    audio.volume = (volume);
    setDisplayValue(`${e.target.id}`)
    }
  }

  const keyListen = (e) => {
    const audioElement = document.getElementById(e.key);
    const buttonElement = audioElement?.parentElement; 
  
    if (audioElement && buttonElement) {
      audioElement.currentTime = 0; 
      audioElement.volume = volume; 
      audioElement.play(); 
      setDisplayValue(buttonElement.id); 
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyListen);
    return () => {
      window.removeEventListener('keydown', keyListen);
    };
  }, [volume]);

  const finalOutput = type ? music1.map((el) => {
    return (
    <button key={el.name} className ="drum-pad" id={el.type} onClick={musicPlayer}>{el.name}
    <audio className="clip" id={el.name} src={el.src}></audio>
    </button>
    )
  })
  :
  music.map((el) => {
    return (
    <button key={el.name} className ="drum-pad" id={el.type} onClick={musicPlayer}>{el.name}
    <audio className="clip" id={el.name} src={el.src}></audio>
    </button>
    )
  })

  return(
    <>
      <div id="drum-machine">
        <div className="drumpad">
          {finalOutput}
        </div>
        <div className="controls">
          <div className="power">
            <button onClick={powerOn} style={{float: power ? "left" : "right"}}></button>
          </div>
          <div id="display">{displayValue}</div>
          <input max="1" min="0.01" step="0.01" type="range" value={volume} onChange={volumeControl}/>
          <div className="type">
            <button onClick={changeType} style={{float: type ? "left" : "right"}}></button>
            </div>
        </div>
      </div>
      
    </>
  )
}