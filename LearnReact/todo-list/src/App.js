// import './App.css';
import React, {useState} from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";



function App(props) {
  //callback props
function addTask(name) {
  const newTask = {name: name, complete:false, id:"id"};
  setTasks([...tasks, newTask]);
}
 const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task => <Todo name={task.name} complete={task.complete} id={task.id} />);
  const taskType = props.types?.map(type => <FilterButton taskType={type}/>);
  return (
    <div className="App">
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={addTask} />

        <div className="filters btn-group stack-exception">
          {taskType}
        </div>

        <h2 id="list-heading">3 task reamaning</h2>
        <ul role="list" aria-labelledby="list-heading" className="todo-list stack-large stack-exception">
          {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
