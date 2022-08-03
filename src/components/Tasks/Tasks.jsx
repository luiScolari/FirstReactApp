import React from 'react';
import P from 'prop-types';

import Task from '../Task/Task';

const Tasks = ({ tasks = [], handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
      ))}
    </>
  );
};

export default Tasks;

Tasks.propTypes = {
  tasks: P.array,
  handleTaskClick: P.func,
  handleTaskDeletion: P.func,
};
