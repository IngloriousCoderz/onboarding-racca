/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import PropTypes from "prop-types";
import { useForm } from "./use-form";

function Form({ onSubmit }) {
  const { text, handleChange, handleSubmit } = useForm(onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        placeholder="What next?"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

Form.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default memo(Form);
