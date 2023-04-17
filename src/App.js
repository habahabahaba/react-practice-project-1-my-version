import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import { v4 as uuidv4 } from "uuid";

// const userId = uuidv4();
// console.log(userId);

const DUMMY_USER_ENTRIES = [{ userId: "someId", userName: "Max", userAge: 31 }];

function App() {
  const [userEntries, setUserEntries] = useState(DUMMY_USER_ENTRIES);

  const [error, setError] = useState({
    errorState: false,
    errorMessage1: "",
    errorMessage2: "",
    errorMessage3: "",
  });

  function addUserHandler(userData) {
    // Checking the userData:
    if (userData.userName == "" || userData.userAge == "") {
      console.log("Please enter a valid name and age (non-empty values).");
      return;
    }

    if (+userData.userAge < 0) {
      console.log("Please enter a valid age (>0).");
      return;
    }

    // Adding the userEntry to the userEntries:
    const userEntry = { userId: uuidv4(), ...userData };
    setUserEntries((prevState) => [userEntry, ...prevState]);
  }

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UserList userEntries={userEntries} />
    </div>
  );
}

export default App;
