import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import { v4 as uuidv4 } from "uuid";

// const userId = uuidv4();
// console.log(userId);

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
