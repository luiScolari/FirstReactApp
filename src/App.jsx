import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import TaskDetails from "./components/TaskDetails"

import "./app.css"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      completed: false
    },
    {
      id: 2,
      title: 'Ler livros',
      completed: true
    },
    {
      id: 3,
      title: 'Ler livros',
      completed: true
    }
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    }
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task
    });
    setTasks(newTask)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks)
  }

  return (
    <Router >
      <div className='container'>
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} tasks={tasks} />
            </>
          )}
        />
        <Route
          path="/:TaskTitle"
          exact
          component={TaskDetails}
        />
      </div>
    </Router >
  );
};

export default App;