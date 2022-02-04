import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); 
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if(text==="")
      props.showAlert("Enter some text to continue!", "warning");
    else  
      props.showAlert("Converted to UpperCase!", "success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(text==="")
      props.showAlert("Enter some text to continue!", "warning");
    else
      props.showAlert("Converted to LowerCase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSpecialChars = () => {
    let reg = /[^a-zA-Z0-9\s]/g;
    let newText = text.replace(reg, "");
    setText(newText);
    if(text==="")
      props.showAlert("Enter some text to continue!", "warning");
    else
      props.showAlert("Removed SpecialCharacters!", "success");
  };

  const handleCLearText = () => {
    setText("");
    document.getElementById("myBox").placeholder = "";
    if(text==="")
      props.showAlert("Enter some text to continue!", "warning");
    else
      props.showAlert("Cleared Text!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text==="")
      props.showAlert("Enter some text to continue!", "warning");
    else
      props.showAlert("Removed ExtraSpaces!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#36366d",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder= {props.mode==='light' ? "Enter Your Text Here" : ""}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpecialChars}>
          Remove SpecialCharacters
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCLearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove ExtraSpaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words &{" "}
          {text.length} characters
        </p>
        <h1>Preview</h1>
        <p>{text.length>0 ? text : "Nothing to preview!"}</p>
        <hr />
      </div>
    </>
  );
}
