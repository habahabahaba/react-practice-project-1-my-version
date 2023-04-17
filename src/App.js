import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import { v4 as uuidv4 } from "uuid";

// const userId = uuidv4();
// console.log(userId);

const DUMMY_USER_ENTRIES = [{ userId: uuidv4(), userName: "Max", userAge: 31 }];

const [userEntries, setUserEntries] = useState(DUMMY_USER_ENTRIES);

const [error, setError] = useState({
  errorState: false,
  errorMessage1: "",
  errorMessage2: "",
  errorMessage3: "",
});

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
