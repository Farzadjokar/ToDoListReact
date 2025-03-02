import { useState } from "react";

function Footer({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task); 
      setTask("");
    }
  };

  return (
    <div className="Footer">
      <input className="textField"
        type="text"
        placeholder="Enter task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Footer;
