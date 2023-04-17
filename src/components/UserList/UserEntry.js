import React, { useState } from "react";
function UserEntry(props) {
  return (
    <div>
      <h2>
        {props.userName} ({props.userAge} years old)
      </h2>
    </div>
  );
}

export default UserEntry;
