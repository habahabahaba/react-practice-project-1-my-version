import React from "react";
import "./UserEntry.css";

function UserEntry(props) {
  return (
    <div>
      <p className="user-entry-container">
        {props.userName} ({props.userAge} years old)
      </p>
    </div>
  );
}

export default UserEntry;
