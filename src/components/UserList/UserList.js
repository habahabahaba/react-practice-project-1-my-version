import React, { useState } from "react";
import UserEntry from "./UserEntry";
function UserList() {
  return (
    <div>
      <ul>
        <UserEntry />
      </ul>
    </div>
  );
}

export default UserList;
