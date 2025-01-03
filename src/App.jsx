import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      // Add task to list
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(""); 
    }
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <div className="container1">
        <div className="container2">
          <h1 className="write">To-Do List</h1>

          <div className="input-container">
            <input
              type="text"
              placeholder="Add a new task..."
              className="inputField"
              value={task}
              onChange={handleTaskChange}
            />
            <button className="button" onClick={handleAddTask}>
              Add
            </button>
          </div>

          <div className="filter-container">
            <p className="style1">All</p>
            <p className="style2">Active</p>
            <p className="style3">Completed</p>
          </div>

          <div className="task-list">
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <div key={index} className="task-item">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleTaskToggle(index)}
                  />
                  <p className={task.completed ? "completed-task" : ""}>
                    {task.text}
                  </p>
                </div>
              ))
            ) : (
              <p className="typeP">No tasks yet. Add one above!</p>
            )}
          </div>

          <div className="pp">
            <div className="typeall">
              <p className="type1">Powered by</p>
              <p className="type2">Pinecone Academy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
