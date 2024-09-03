import { useState } from "react";
// component= hi function hota hai lekin component ke andar hi eliment retun hota hai,
//function=
// eliment return ke aandr kam karta hai ex.<div>
//proparty=eliment ke aandr kam karta hai ex. sty
const Calculator = () => {
  const [text, setText] = useState("");

  
  const numberCliced = (num) => {
    setText(text + num);
  
  };
  const subtrack = () =>{
    const subtrack= text.slice(1,0)
    setText()
  }

  const onEqualtToClick = () => {
   
    
  }
  


const onBackclick =  () => { 
  const sub= text.slice(0,-1)
setText(sub)
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "650px",
        width: "1350px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "16px",
          border: "2px solid gray",
        }}
      >
        <span>Calulator</span>

        <span
          style={{
            display: "flex",
            padding: "8px",
            border: "2px solid gray",
          }}
        >
          {text}
        </span>

        <div
          style={{
            display: "flex",
            gap: "2px",
          }}
        >
          <button onClick={() => numberCliced("1")}>1</button>
          <button onClick={() => numberCliced("2")}>2</button>
          <button onClick={() => numberCliced("3")}>3</button>
          <button onClick={() => numberCliced("4")}>4</button>
          <button onClick={() => numberCliced("5")}>5</button>
          <button onClick={() => numberCliced("6")}>6</button>
          <button onClick={() => numberCliced("7")}>7</button>
          <button onClick={() => numberCliced("8")}>8</button>
          <button onClick={() => numberCliced("9")}>9</button>
          <button onClick={() => numberCliced("0")}>0</button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2px",
            justifyContent: "center",
          }}
        >
          <button onClick={() => numberCliced("+")}>+</button>
          <button onClick={() =>numberCliced("-")}>-</button>
          <button onClick={() => numberCliced("*")}>*</button>
          <button onClick={() => numberCliced("/")}>/</button>
          <button onClick={() => onBackclick()}>back</button>
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => onEqualtToClick()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
