import React, { useState } from "react";
function UserForm() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Username</h1>
      <input type="text"></input>
      <h1>Age (Years)</h1>
      <input type="number"></input>
      <button type="submit" style={{ display: "block" }}>
        Add User
      </button>
    </div>
  );
}

export default UserForm;
