import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function handleloClick() {
    let newText = text.toLowerCase();
    setText(newText);
  }
  function clearText() {
    setText("");
  }
  function textCopy() {
    let text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  function handleOnChange(e) {
    setText(e.target.value);
  }
  function handleExtraSpaces(e) {
    let newText1 = text.split(/[ ]+/);
    setText(newText1.join(" "));
  }

  return (
    <>
      <div className="container my-4">
        <h1 className= {`text-${
              props.mode === "light" ? "dark" : "light"
            } `}>Enter the text to analyze</h1>
        <div className="form-floating">
          <textarea
            className= {`form-control my-3 text-${
              props.mode === "light" ? "dark" : "light"
            } `}
            onChange={handleOnChange}
            value={text}
            id="textArea"
            style={{ backgroundColor: props.mode === "light" ? "white" : "black"}}
          ></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To Upper case 
        </button> 
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>
          Convert To lower case 
        </button> 
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={clearText}>
          Clear Text 
        </button> 
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={textCopy}>
          Copy Text 
        </button> 
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div  className= {`container my-3 text-${
              props.mode === "light" ? "dark" : "light"
            } `}>
        <h1 >Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
