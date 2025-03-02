import { useState } from "react";

const style1 = {
  float: "left",
  width: "300px",
  textAlign: "left",
  paddingLeft: "5px"
};
const style2 = {
  float: "right",
  width: "auto",
};
const style3 = {
  width: "25px",
  height: "25px"
};
const style4 = {
  marginRight: "5px",
};
const style5={
  height:"35px",
  fontSize:"x-large"
};
function Task({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  return (
    <div className="Tasks">
      <div style={style1}>
        {isEditing ? (
          <input style={style5}
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
        ) : (
          <span className="tasks">{task.text}</span>
        )}
      </div>
      <div style={style2}>
        {isEditing ? (
          <button className="save" onClick={() => { updateTask(task.id, newText); setIsEditing(false); }}>Save</button>
        ) : (
          <>
          <input style={style3} type="checkbox" />
            <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
            <button style={style4} className="edit" onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Task;
