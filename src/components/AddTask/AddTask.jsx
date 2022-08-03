import React from 'react';
import { useState } from 'react';
import P from 'prop-types';

import Button from '../Button/Button';
import './AddTask.css';
const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData('');
  };

  return (
    <div className="add-task-container">
      <input
        placeholder="Write your task"
        className="add-task-input"
        type="text"
        onChange={handleInputChange}
        value={inputData}
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;

AddTask.propTypes = {
  handleTaskAddition: P.func,
};
