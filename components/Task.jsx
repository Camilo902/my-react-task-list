import React from 'react';
import { Checkbox, Text } from '@chakra-ui/react';

function Task({ id, title, description, isCompleted, onToggle }) {
  const textDecorationStyle = isCompleted ? 'line-through' : 'none';

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text textDecoration= {textDecorationStyle} fontSize='xl' color="gray">{title}</Text>
        <Checkbox ml="10px" border="#0069a4" isChecked={isCompleted} onChange={() => onToggle(id)} />
      </div>
      <Text as='i'>{description}</Text>
    </div>
  );
}

export default Task;
