import React from "react";
import "./ErrorWindow.css";

function ErrorWindow(props) {
  function clickHandler(event) {
    props.setError((prevState) => (prevState = false));
  }

  return (
    <div>
      <div style={{}} className="error-window">
        <h2 style={{}} className="error-header">
          Invalid input
        </h2>
        <p className="error-message">{props.error.errorMessage}</p>
        <div style={{}} className="button-container2">
          <button onClick={clickHandler} style={{}} className="button">
            Okay
          </button>
        </div>
      </div>
      <div onClick={clickHandler} style={[]} className="error-overlay" />
    </div>
  );
}

export default ErrorWindow;
