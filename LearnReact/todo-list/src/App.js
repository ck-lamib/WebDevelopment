// import './App.css';
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";

function addTask(name) {
  alert(name);
}


function App(props) {
  const taskList = props.tasks?.map(task => <Todo name={task.name} complete={task.complete} id={task.id} />);
  const taskType = props.types?.map(type => <FilterButton taskType={type}/>);
  return (
    <div className="App">
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <form>
            <h2 className="label-wrapper">
              <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
              </label>
              </h2>
            <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off"/>
            <button type="button" className="btn btn__primary btn__lg">Add</button>
        </form>

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
