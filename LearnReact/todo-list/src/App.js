// import './App.css';

function App(props) {
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
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all </span>
            <span className="visually-hidden">task</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>active </span>
            <span className="visually-hidden">task </span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>completed </span>
            <span className="visually-hidden">task</span>
          </button>
        </div>

        <h2 id="list-heading">3 task reamaning</h2>
        <ul role="list" aria-labelledby="list-heading" className="todo-list stack-large stack-exception">
          <li className="todo stack-small">
            <div className="c-cb">
              <input type="checkbox" defaultChecked={true} id="todo-0" />
              <label className="todo-label" htmlFor="todo-0">Eat</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Eat</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Eat</span>
              </button>
            </div>
          </li>

          <li className="todo stack-small">
            <div className="c-cb">
              <input type="checkbox" id="todo-1" />
              <label className="todo-label" htmlFor="todo-1">Sleep</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Sleep</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Sleep</span>
              </button>
            </div>
          </li>
          
          <li className="todo stack-small">
            <div className="c-cb">
              <input type="checkbox" id="todo-2" />
              <label className="todo-label" htmlFor="todo-2">Repeat</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Repeat</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Repeat</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
