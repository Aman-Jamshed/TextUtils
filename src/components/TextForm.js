import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");
  // !  text = "new text"; we can't change the state in react like this in react
  // *  setText("new text"); correct way to change the state
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared succesfully", "success");
  };

  const handleCopy = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text copied succesfully", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces succesfully", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change!!");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
          <p>{text.split(" ").length * 0.008} Minutes to read</p>
          <div>
            <h2>Preview</h2>
            <p>
              {text.length > 0
                ? text
                : "Enter something in the textbox above to preview it"}
            </p>
          </div>
        </p>
      </div>
    </>
  );
}

// 7:00
