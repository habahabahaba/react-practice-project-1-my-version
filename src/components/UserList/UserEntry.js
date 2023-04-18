import React from "react";
function UserEntry(props) {
  return (
    <div>
      <p>
        {props.userName} ({props.userAge} years old)
      </p>
    </div>
  );
}

export default UserEntry;
