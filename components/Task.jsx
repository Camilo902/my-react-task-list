import React from 'react';

function Task({ id, title, description, isCompleted, onToggle }) {
  const textDecorationStyle = isCompleted ? 'line-through' : 'none';

  return (
    <div>
      <div>
        <span style={{ textDecoration: textDecorationStyle }}>{title}</span>
        <input type="checkbox" checked={isCompleted} onChange={() => onToggle(id)} />
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Task;
