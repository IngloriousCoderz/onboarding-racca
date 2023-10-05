import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./app.module.css";

function App({ name }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // clone
    // setTasks((tasks) => {
    //   const clone = [...tasks];
    //   const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
    //   const task = { id: maxId + 1, text: "New task" };
    //   clone.push(task);
    //   return clone;
    // });

    // sandwich
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      return [...tasks, { id: maxId + 1, text: "New task" }];
    });
    // setTasks((tasks) => {
    //   const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
    //   return [...tasks, { id: maxId + 1, text: "New task" }];
    // });
  };

  const handleSpanClick = (id) => {
    // clone
    // setTasks((tasks) => {
    //   const clone = [...tasks];
    //   clone[index] = { ...clone[index], completed: !clone[index].completed };
    //   return clone;
    // });

    // sandwich
    // setTasks(tasks => [
    //   ...tasks.slice(0, index),
    //   { ...tasks[index], completed: !tasks[index].completed },
    //   ...tasks.slice(index + 1),
    // ]);

    // array method
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleButtonClick = (id) => {
    // clone
    // setTasks((tasks) => {
    //   const clone = [...tasks];
    //   clone.splice(index, 1);
    //   return clone;
    // });

    // sandwich
    // setTasks((tasks) => [...tasks.slice(0, index), ...tasks.slice(index + 1)]);

    // array method
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1 className="completed">{name}&rsquo;s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="What next?" />
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
