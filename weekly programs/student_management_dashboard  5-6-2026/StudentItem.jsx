import React from "react";

function StudentItem({ name, deleteStudent }) {
  return (
    <li>
      {name} <button onClick={() => deleteStudent(name)}>Delete</button>
    </li>
  );
}

export default StudentItem;
