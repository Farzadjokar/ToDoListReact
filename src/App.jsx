import { useState } from "react";
import Footer from "./Footer.jsx";
import Task from "./Task.jsx";
import Header from "./Header.jsx";
// import Header from "./Header.jsx"

function App() {
  const [tasks, setTasks] = useState([{ id: 1, text: "Task1" }]);


  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText };
    setTasks([...tasks, newTask]);
  };


  const updateTask = (id, newText) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <> 
  <Header></Header>
    <Footer addTask={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </>
  );
}

export default App;
