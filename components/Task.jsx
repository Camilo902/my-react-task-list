function Task({ name, isCompleted, onToggle }) {
    return (
      <div>
        <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{name}</span>
        <input type="checkbox" checked={isCompleted} onChange={onToggle} />
      </div>
    );
  }

export {Task};
