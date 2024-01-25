// Task.jsx

import React from 'react';

function Task({ title, description, isCompleted, onToggle }) {
  return (
    <div className="task">
      <div className="task-details">
        <span className={isCompleted ? 'completed' : ''}>{title}</span>
        <input type="checkbox" checked={isCompleted} onChange={onToggle} />
      </div>
      {description && <p className="task-description">{description}</p>}
    </div>
  );
}

export default Task;
