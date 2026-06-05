import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul style={styles.list}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyle: "none",
    padding: 0,
  },
};

export default TaskList;

