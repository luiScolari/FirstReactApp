import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../Button/Button';

import './TaskDetails.css';

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.TaskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi illo natus mollitia vero quas ea cum
          soluta tempora qui distinctio minus, obcaecati facilis, voluptates minima dolores amet fugit sequi?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
