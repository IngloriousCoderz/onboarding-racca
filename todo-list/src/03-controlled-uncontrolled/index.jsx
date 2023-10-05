import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./app.module.css";

const LAST_ITEM_INDEX = 1;
const MIN_ID = 0;
const NEXT_ID = 1;

function App({ name }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ]);
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks((tasks) => {
      const maxId = tasks.length
        ? tasks[tasks.length - LAST_ITEM_INDEX].id
        : MIN_ID;
      return [...tasks, { id: maxId + NEXT_ID, text }];
    });

    setText("");
  };

  const handleSpanClick = (id) =>
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const handleButtonClick = (id) =>
    setTasks((tasks) => tasks.filter((task) => task.id !== id));

  return (
    <>
      <h1 className="completed">{name}&rsquo;s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder="What next?"
          value={text}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id}>
            <span
              className={classNames({ [classes.completed]: completed })}
              onClick={() => handleSpanClick(id)}
            >
              {text}
            </span>
            &nbsp;
            <button onClick={() => handleButtonClick(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};

App.defaultProps = {
  name: "Antony",
};

export default App;
