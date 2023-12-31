import { useSelector, useDispatch } from "react-redux";

import FormComponent from "./form";
import { textChanged } from "./text.slice";
import { taskAdded } from "../redux/thunks";
import { selectText } from "../redux/selectors";

// container component

function Form() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(textChanged(event.target.value));
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(taskAdded(text));
  };

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Form;
