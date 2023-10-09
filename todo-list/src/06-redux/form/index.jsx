import { useSelector, useDispatch } from "react-redux";

import FormComponent from "./form";
import { textChanged } from "./text.slice";
import { taskAdded } from "../redux/04-slices/action-creators";
import { selectText } from "../redux/04-slices/selectors";

// container component

function Form() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(textChanged(event.target.value));
  const handleSubmit = (event) => {
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
