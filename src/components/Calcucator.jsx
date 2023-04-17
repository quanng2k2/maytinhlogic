import React, { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const calculate = (expression) => {
    const operatort = ["+", "-", "*", "/"];
    const parts = expression.split(/([+\-*/])/);
    let result = Number(parts[0]);

    let i = 1;
  while (i < parts.length) {
    const operator = parts[i];
    const operand = Number(parts[i + 1]);
    if (operatort.includes(operator)) {
      i += 2;
      if (operator === '*') {
        result *= operand;
      } else if (operator === '/') {
        result /= operand;
      } else if (operator === '+') {
        result += operand;
      } else if (operator === '-') {
        result -= operand;
      }
    }
  }

  return result;
}

  const handleClickButton = (value) => {
    if (value === "AC") {
      setDisplay("");
      setResult("");
    } else if (value === "=") {
      // calculate the result here
      setResult(calculate(display)); 
      setDisplay("") 
    } else {
      setDisplay(display + value);   
    }
  };

  return (
    <div>
      <div className="mainSum">
        <div className="dislay">
          <span>{display} </span>
          <div className="result">{result}</div> 
        </div>
        <div className="container">
          <div className="row">
            <button className="clear" onClick={() => handleClickButton("AC")}>  
              {" "}
              AC{" "}
            </button>
            <button onClick={() => handleClickButton("Del")}> Del </button> 
            <button onClick={() => handleClickButton("/")}> / </button>
          </div>

          <div className="row">
            <button onClick={() => handleClickButton("7")}>7</button>
            <button onClick={() => handleClickButton("8")}>8</button>
            <button onClick={() => handleClickButton("9")}>9</button>
            <button onClick={() => handleClickButton("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleClickButton("4")}>4</button>
            <button onClick={() => handleClickButton("5")}>5</button>
            <button onClick={() => handleClickButton("6")}>6</button>
            <button onClick={() => handleClickButton("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleClickButton("1")}>1</button>
            <button onClick={() => handleClickButton("2")}>2</button>
            <button onClick={() => handleClickButton("3")}>3</button>
            <button onClick={() => handleClickButton("+")}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleClickButton("0")}>0</button>
            <button onClick={() => handleClickButton(".")}>.</button>
            <button className="equals" onClick={() => handleClickButton("=")}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
