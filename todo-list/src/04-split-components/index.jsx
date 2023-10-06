import { useState, useCallback } from "react";
import PropTypes from "prop-types";

import List from "./list";
import Form from "./form/form-with-hook";

const LAST_ITEM_INDEX = 1;
const MIN_ID = 0;
const NEXT_ID = 1;

function App({ name }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ]);

  const handleSubmit = useCallback(
    (text) =>
      setTasks((tasks) => {
        const maxId = tasks.length
          ? tasks[tasks.length - LAST_ITEM_INDEX].id
          : MIN_ID;
        return [...tasks, { id: maxId + NEXT_ID, text }];
      }),
    []
  );

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
      <Form onSubmit={handleSubmit} />
      <List
        tasks={tasks}
        onSpanClick={handleSpanClick}
        onButtonClick={handleButtonClick}
      />
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
