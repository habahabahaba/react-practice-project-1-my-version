import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function UserForm(props) {
  const blankUserInput = {
    enteredName: "",
    enteredAge: "",
  };

  const [userInput, setUserInput] = useState(blankUserInput);

  function nameChangeHandler(event) {
    setUserInput((prevState) => ({
      ...prevState,
      enteredName: event.target.value,
    }));
  }
  function ageChangeHandler(event) {
    setUserInput((prevState) => ({
      ...prevState,
      enteredAge: +event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    const userData = {
      userName: userInput.enteredName,
      userAge: userInput.enteredAge,
    };
    props.onAddUser(userData);
    setUserInput((prevState) => blankUserInput);
  }
  return (
    <form
      onSubmit={submitHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Username</h1>
      <input
        type="text"
        value={userInput.enteredName}
        onChange={nameChangeHandler}
      ></input>
      <h1>Age (Years)</h1>
      <input
        type="number"
        min="0"
        step="1"
        value={userInput.enteredAge}
        onChange={ageChangeHandler}
      ></input>
      <button type="submit" style={{ display: "block" }}>
        Add User
      </button>
    </form>
  );
}

export default UserForm;
