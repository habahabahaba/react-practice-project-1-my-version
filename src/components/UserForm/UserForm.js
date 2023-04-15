import React, { useState } from "react";
function UserForm() {
  return (
    <div>
      <h1>Username</h1>
      <input type="text"></input>
      <h1>Age (Years)</h1>
      <input type="number"></input>
      <button type="submit">Add User</button>
    </div>
  );
}

export default UserForm;
