import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./UserForm.css";

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
    <form className="user-form" onSubmit={submitHandler}>
      <h2 className="form-header">Username</h2>
      <input
        className="form-input"
        type="text"
        value={userInput.enteredName}
        onChange={nameChangeHandler}
      ></input>
      <h2 className="form-header">Age (Years)</h2>
      <input
        className="form-input"
        type="number"
        // min="0"
        step="1"
        value={userInput.enteredAge}
        onChange={ageChangeHandler}
      ></input>
      <div className="button-container1" style={{}}>
        <button className="button" type="submit">
          Add User
        </button>
      </div>
    </form>
  );
}

export default UserForm;
