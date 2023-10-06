import { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import List from "./list";
import Form from "./form/form-with-hook";
import * as api from "./service/api";

function App({ name }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.retrieveTasks().then(setTasks);
    // async function fetchTasks() {
    //   const tasks = await retrieveTasks();
    //   setTasks(tasks);
    // }
    // fetchTasks();
  }, []);

  const handleSubmit = useCallback(async (text) => {
    const createdTask = await api.createTask({ text });
    setTasks((tasks) => [...tasks, createdTask]);
  }, []);

  const handleSpanClick = async (id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = await api.updateTask(id, {
      completed: !task.completed,
    });
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  const handleButtonClick = async (id) => {
    await api.deleteTask(id);
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

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
