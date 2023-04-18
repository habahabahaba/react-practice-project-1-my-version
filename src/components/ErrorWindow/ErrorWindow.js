import React from "react";

function ErrorWindow(props) {
  function clickHandler(event) {
    props.setError((prevState) => (prevState = false));
  }

  return (
    <div>
      <div
        style={{
          display: "block",
          // position: "fixed",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          padding: "0 0 2% 0",
          zIndex: "1101",
          backgroundColor: "white",
          borderRadius: "7px",
          // backdropFilter: "blur(2px)",
        }}
      >
        <h2
          style={{ background: "purple", color: "white", margin: "0 0 5% 0" }}
        >
          Invalid input
        </h2>
        <p>{props.error.errorMessage}</p>
        <div style={{ textAlign: "end", padding: "3% 3% 0 0" }}>
          <button
            onClick={clickHandler}
            style={{
              background: "purple",
              color: "white",
              border: "none",
              borderRadius: "1px",
            }}
          >
            Okay
          </button>
        </div>
      </div>{" "}
      <div
        onClick={clickHandler}
        style={{
          backdropFilter: "blur(2px)",
          backgroundColor: "black",
          opacity: "50%",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "100",
        }}
      />
    </div>
  );
}

export default ErrorWindow;
