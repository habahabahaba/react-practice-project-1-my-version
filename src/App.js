import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import { v4 as uuidv4 } from "uuid";
import ErrorWindow from "./components/ErrorWindow/ErrorWindow";

// const DUMMY_USER_ENTRIES = [{ userId: "someId", userName: "Max", userAge: 31 }];

const DUMMY_USER_ENTRIES = [];

function App() {
  const [userEntries, setUserEntries] = useState(DUMMY_USER_ENTRIES);

  const [error, setError] = useState({
    errorState: false,
    errorMessage: "",
  });

  function addUserHandler(userData) {
    // Checking the userData:
    if (userData.userName === "" || userData.userAge === "") {
      setError((prevState) => ({
        errorState: true,
        errorMessage: "Please enter a valid name and age (non-empty values).",
      }));
      return;
    }

    if (+userData.userAge < 0) {
      setError((prevState) => ({
        errorState: true,
        errorMessage: "Please enter a valid age (>0).",
      }));
      return;
    }

    // Adding the userEntry to the userEntries:
    const userEntry = { userId: uuidv4(), ...userData };
    setUserEntries((prevState) => [userEntry, ...prevState]);
  }

  return (
    <div className="App">
      {error.errorState === true && (
        <ErrorWindow error={error} setError={setError} />
      )}
      <UserForm onAddUser={addUserHandler} />
      <UserList userEntries={userEntries} />
    </div>
  );
}

export default App;
