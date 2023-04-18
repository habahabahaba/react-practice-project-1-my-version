import React from "react";
import UserEntry from "./UserEntry";
import "./UserList.css";

function UserList(props) {
  return (
    // <div>
    <ul className="user-list">
      {props.userEntries.map((element) => (
        <UserEntry
          key={element.userId}
          userName={element.userName}
          userAge={element.userAge}
        />
      ))}
    </ul>
    // </div>
  );
}

export default UserList;
