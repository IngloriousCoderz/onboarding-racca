import { useSelector, useDispatch } from "react-redux";
import ListComponent from "./list";
import { taskDeleted, taskToggled } from "./tasks.slice";
import { selectTasks } from "../redux/04-slices/selectors";

// container component

function List() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleSpanClick = (id) => dispatch(taskToggled(id));
  const handleButtonClick = (id) => dispatch(taskDeleted(id));

  return (
    <ListComponent
      tasks={tasks}
      onSpanClick={handleSpanClick}
      onButtonClick={handleButtonClick}
    />
  );
}

export default List;
