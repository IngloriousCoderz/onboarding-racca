import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./list.module.scss";

// presentational component

function List({ tasks, onSpanClick, onButtonClick }) {
  return (
    <ul>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={classNames({ [classes.completed]: completed })}
            onClick={() => onSpanClick(id)}
          >
            {text}
          </span>
          &nbsp;
          <button onClick={() => onButtonClick(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  onSpanClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

List.defaultProps = {
  tasks: [],
  onSpanClick: () => {},
  onButtonClick: () => {},
};

export default List;
