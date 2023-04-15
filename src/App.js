import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
