import { useState } from "react";

const List = ({ todo, onRemove }) => {
  const [completed, setCompleted] = useState(Array(todo.length).fill(false));

  const toggleCompleted = (index) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  }
  return (
    <div>
      {todo.map((item, index) => (
        <div style={{ borderColor: completed[index] ? 'green' : 'yellow' }} className="item-container" key={index}>
          <div>
            <input type="checkbox" checked={completed[index]} onChange={() => toggleCompleted(index)} />
            <span className="item-class">{item} </span>
          </div>
          <div>
            <span style={{ color: completed[index] ? 'green' : 'yellow', fontSize: '18px', fontWeight: 'bold' }}>{completed[index] ? 'Completed' : 'Pending'}</span>
            <button className="remove-button" onClick={() => onRemove(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List;