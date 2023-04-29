import React from 'react';

import './Task.css';

import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import P from 'prop-types';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };
  return (
    <div className="task-container" style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
          <CgClose />
        </button>
        <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
      <div>

      <h1>im here</h1>

      </div>
    </div>
  );

  // return <h1 className='task-container'>{task.title}</h1>;
};

export default Task;

Task.propTypes = {
  task: P.object,
  handleTaskClick: P.func,
  handleTaskDeletion: P.func,
};
