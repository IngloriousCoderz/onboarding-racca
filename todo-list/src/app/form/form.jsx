import PropTypes from "prop-types";

// presentational component

function Form({ text, onChange, onSubmit }) {
  console.log("form rendered");
  return (
    <form onSubmit={onSubmit}>
      <input
        autoFocus
        placeholder="What next?"
        value={text}
        onChange={onChange}
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

export default Form;
