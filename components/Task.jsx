import React from 'react';

function Task({ title, description, isCompleted, onToggle }) {
  return (
    <div>
      <div>
        <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</span>
        <input type="checkbox" checked={isCompleted} onChange={onToggle} />
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Task;
