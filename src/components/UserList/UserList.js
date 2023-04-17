import React, { useState } from "react";
import UserEntry from "./UserEntry";
function UserList(props) {
  return (
    <div>
      <ul>
        {props.userEntries.map((element) => (
          <UserEntry
            key={element.usedId}
            userName={element.userName}
            userAge={element.userAge}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
