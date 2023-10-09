import { configureStore } from "@reduxjs/toolkit";
// import todoList from "./03-multiple-reducers";
// import text from "./04-slices/text";
// import tasks from "./04-slices/tasks";
import text from "../form/text.slice";
import tasks from "../list/tasks.slice";
// import {
//   taskAdded,
//   taskDeleted,
//   taskToggled,
//   textChanged,
// } from "./03-multiple-reducers/action-creators";

const store = configureStore({
  reducer: { text, tasks },
  preloadedState: {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  },
});

export default store;

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(textChanged("Hello world!"));
// store.dispatch(taskAdded("New task"));
// store.dispatch(taskToggled(1));
// store.dispatch(taskDeleted(1));
