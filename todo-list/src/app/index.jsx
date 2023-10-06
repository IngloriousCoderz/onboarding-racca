import PropTypes from "prop-types";
import { Provider } from "react-redux";

import List from "./list";
import Form from "./form";

import store from "./redux/store";

function App({ name }) {
  return (
    <Provider store={store}>
      <h1 className="completed">{name}&rsquo;s Todo List</h1>
      <Form />
      <List />
    </Provider>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};

App.defaultProps = {
  name: "Antony",
};

export default App;
