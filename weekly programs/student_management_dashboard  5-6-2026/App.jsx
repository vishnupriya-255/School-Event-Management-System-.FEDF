import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const inputRef = useRef(null);

  // Focus input when page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Update tab title when list changes
  useEffect(() => {
    document.title = `Students: ${students.length}`;
  }, [students]);

  // Add student
  const addStudent = () => {
    const name = inputRef.current.value.trim();
    if (name) {
      setStudents([...students, name]);
      inputRef.current.value = "";
    }
  };

  // Memoized delete function
  const deleteStudent = useCallback(
    (name) => setStudents(students.filter((s) => s !== name)),
    [students]
  );

  // useMemo for calculations
  const totalStudents = useMemo(() => students.length, [students]);
  const totalChars = useMemo(
    () => students.reduce((sum, s) => sum + s.length, 0),
    [students]
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Dashboard</h2>

      <input ref={inputRef} placeholder="Enter name" />
      <button onClick={addStudent}>Add</button>
      <button onClick={() => inputRef.current.focus()}>Focus</button>

      <p>Total Students: {totalStudents}</p>
      <p>Total Characters: {totalChars}</p>

      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
