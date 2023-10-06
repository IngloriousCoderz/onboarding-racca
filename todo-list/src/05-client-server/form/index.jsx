import { useState } from "react";
import PropTypes from "prop-types";

import FormComponent from "./form";

function Form({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  onSubmit: () => {},
};

export default Form;
