import React from "react";
import * as maths from 'mathjs'
import './index.css'

export default function App(){

    const [displayOutput, setDisplayOutput] = React.useState("0")
    const [onclickDisplay, setOnclickDisplay] = React.useState("")
    const [lastClicked, setLastClicked] = React.useState("")
    const [evaluation, setEvaluation] = React.useState(false)

    const displayer = (val) => {

      if(evaluation){
        setEvaluation(false)
        console.log(evaluation)
        if(["+", "-", "*", "/"].includes(val)){
          setOnclickDisplay(displayOutput + val)
          setDisplayOutput(val)
          return
        }
      }

      if(["+", "-", "*", "/"].includes(displayOutput)){
        if(["1","2","3","4","5","6","7","8","9"].includes(val)){
          setDisplayOutput(val)
          setOnclickDisplay((prev) => prev + val)
        }
      }
      if(val=== ("0")){
        setLastClicked("0")
          if(displayOutput !== "0"){
            setDisplayOutput((prev) => prev + val)
            setOnclickDisplay((prev) => prev + val)
            return
          }
          else{
            setDisplayOutput(val)
            setOnclickDisplay(val)
            return
          }
      }

      else if (val === "+" || val === "-" || val === "*" || val === "/") {
        setLastClicked(val)
        setDisplayOutput(val)
        if(lastClicked === "+" || lastClicked === "-" || lastClicked === "*" || lastClicked === "/"){
          setOnclickDisplay((prev) => prev)
        }


        else {
          // setDisplayOutput((prev) => prev + val)
          setOnclickDisplay((prev) => prev + val)
        }

    }

    else if (val === "."){
      setLastClicked(val)
      if(lastClicked !== "."){
        
        setDisplayOutput((prev) => prev + val)
        setOnclickDisplay((prev) => prev + val)
      }
    }
      else{
        setLastClicked(val)
        if(displayOutput === "0"){
          setDisplayOutput(val);
          setOnclickDisplay(val)
          return
        }
        else if (!["+", "-", "*", "/", "0"].includes(displayOutput)){
          setDisplayOutput((prev) => prev + val)
          setOnclickDisplay((prev) => prev + val)
      }
    }
    }

    const clearer = () => {
      setDisplayOutput("0")
      setOnclickDisplay("")
    }

    const evalu = () => {
      const result = maths.evaluate(onclickDisplay)
      setOnclickDisplay((prev) => (prev) + "=" + result)
      setDisplayOutput(result)
      setEvaluation(true)
    }
  return(
    <body>
      <div className="calculator">
        <div className="onclickDisplay"><p>{onclickDisplay}</p></div>
        <div id="display"><p>{displayOutput}</p></div>
        <div className="rows1">
          <button id="clear" onClick={clearer}>AC</button>
          <button id="divide" onClick={() => displayer("/")}>/</button>
          <button id="multiply" onClick={() => displayer("*")}>x</button>
        </div>
        <div className="rows2">
          <button id="seven" onClick={() => displayer("7")}>7</button>
          <button id="eight" onClick={() => displayer("8")}>8</button>
          <button id="nine" onClick={() => displayer("9")}>9</button>
          <button id="subtract" onClick={() => displayer("-")}>-</button>
        </div>
        <div className="rows3">
          <button id="four" onClick={() => displayer("4")}>4</button>
          <button id="five" onClick={() => displayer("5")}>5</button>
          <button id="six" onClick={() => displayer("6")}>6</button>
          <button id="add" onClick={() => displayer("+")}>+</button>
        </div>
        <div className="last-two">
          <div>
            <div className="rows4">
                <button id="one" onClick={() => displayer("1")}>1</button>
                <button id="two" onClick={() => displayer("2")}>2</button>
                <button id="three" onClick={() => displayer("3")}>3</button>
              </div>
              <div className="rows5">
                <button id="zero" onClick={() => displayer("0")}>0</button>
                <button id="decimal" onClick={() => displayer(".")}>.</button>
              </div>
          </div>
        <button id="equals" onClick={evalu}>=</button>
      </div>
    </div>
    </body>
  )
}