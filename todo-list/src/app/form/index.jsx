import { useSelector, useDispatch } from "react-redux";

import FormComponent from "./form";
import {
  taskAdded,
  textChanged,
} from "../redux/03-multiple-reducers/action-creators";
import { selectText } from "../redux/03-multiple-reducers/selectors";

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
