import React from "react";

const TaskItem = ({ task, onDelete }) => {
  return (
    <li style={styles.item}>
      <span>{task}</span>
      <button onClick={onDelete} style={styles.deleteBtn}>
        Delete
      </button>
    </li>
  );
};

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#fff",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  deleteBtn: {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default TaskItem;
