// import './App.css';
import React, { useState } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'


const FILTER_MAP = {
  All: () => true,
  Active: task => !task.complete,
  Complete: task => task.complete
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {
  //callback props
  function addTask(name) {
    const newTask = { name: name, complete: false, id: "todo-" + nanoid() };
    setTasks([...tasks, newTask]);
  }
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTask = tasks.map(task => {
      if (id === task.id) {
        return { ...task, complete: !task.complete }
      }
      return task;
    });
    setTasks(updatedTask);
  }

  function deleteTasks(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTasks(id, newName) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }


  const [filter, setFilter] = useState('All');
  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => <Todo name={task.name} complete={task.complete} id={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTasks={deleteTasks} editTasks={editTasks} />);
  // const taskType = props.types?.map(type => <FilterButton taskType={type} />);
  const tasksNoun = (taskList.length === 1) ? 'task' : 'tasks';
  const headingText = `${taskList.length} ${tasksNoun} reamaning`;
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter}/>
  ));
  return (
    <div className="App">
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={addTask} />

        <div className="filters btn-group stack-exception">
          {filterList}
        </div>

        <h2 id="list-heading">{headingText}</h2>
        <ul role="list" aria-labelledby="list-heading" className="todo-list stack-large stack-exception">
          {/* {taskType} */}
          {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
