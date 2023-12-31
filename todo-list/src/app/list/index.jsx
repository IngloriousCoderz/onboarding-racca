import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ListComponent from "./list";
import { selectTasks } from "../redux/selectors";
import { tasksRetrieved, taskToggled, taskDeleted } from "../redux/thunks";

// container component

function List() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tasksRetrieved());
  }, [dispatch]);

  const handleSpanClick = async (id) => dispatch(taskToggled(id));

  const handleButtonClick = async (id) => dispatch(taskDeleted(id));

  return (
    <ListComponent
      tasks={tasks}
      onSpanClick={handleSpanClick}
      onButtonClick={handleButtonClick}
    />
  );
}

export default List;
