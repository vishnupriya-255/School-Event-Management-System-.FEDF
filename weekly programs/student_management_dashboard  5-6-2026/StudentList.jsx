import React from "react";
import StudentItem from "./StudentItem";

function StudentList({ students, deleteStudent }) {
  return (
    <ul>
      {students.map((name, i) => (
        <StudentItem key={i} name={name} deleteStudent={deleteStudent} />
      ))}
    </ul>
  );
}

export default StudentList;
