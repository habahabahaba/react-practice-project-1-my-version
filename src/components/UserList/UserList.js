import React from "react";
import UserEntry from "./UserEntry";
function UserList(props) {
  return (
    <div>
      <ul>
        {props.userEntries.map((element) => (
          <UserEntry
            key={element.userId}
            userName={element.userName}
            userAge={element.userAge}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
