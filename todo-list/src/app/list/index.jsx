import { useSelector, useDispatch } from "react-redux";
import ListComponent from "./list";
import {
  taskDeleted,
  taskToggled,
} from "../redux/03-multiple-reducers/action-creators";
import { selectTasks } from "../redux/03-multiple-reducers/selectors";

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
