import PropTypes from "prop-types";

// import { style } from "./style";
import classes from "./app.module.css";

function App({ name }) {
  return (
    <>
      <h1 className="completed">{name}&rsquo;s Todo List</h1>
      <form>
        <input autoFocus placeholder="What next?" />
        <button>Add</button>
      </form>
      <ul>
        <li>
          <span className={classes.completed}>
            {/* style={style}> */}
            Learn React
          </span>
          &nbsp;<button>x</button>
        </li>
        <li>
          <span>Look for a job</span>&nbsp;<button>x</button>
        </li>
        <li>
          <span>Forget everything</span>&nbsp;<button>x</button>
        </li>
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
