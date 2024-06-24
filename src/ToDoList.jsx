import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Drink water", "Save bear"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((element, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setTasks(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTasks(updatedTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1 className="">To Do List</h1>
      <div className="input-container">
        <input type="text" placeholder="What's the task for today?" value={newTask} onChange={handleInputChange} />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <div>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>
                  👆
                </button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>
                  👇
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
