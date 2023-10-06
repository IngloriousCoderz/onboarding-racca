import { configureStore } from "@reduxjs/toolkit";
import todoList from "./03-multiple-reducers";
// import {
//   taskAdded,
//   taskDeleted,
//   taskToggled,
//   textChanged,
// } from "./03-multiple-reducers/action-creators";

export default configureStore({
  reducer: todoList,
  preloadedState: {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  },
});

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(textChanged("Hello world!"));
// store.dispatch(taskAdded("New task"));
// store.dispatch(taskToggled(1));
// store.dispatch(taskDeleted(1));
