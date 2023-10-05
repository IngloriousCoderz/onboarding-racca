import ReactDOM from "react-dom/client";
import App from "./app";

// import { Fragment } from "react";
// import { jsx as _jsx } from "react/jsx-runtime";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App name="Matteo Antony" />
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   React.createElement(Fragment, {}, [
//     React.createElement("h1", { className: "completed" }, "Todo List"),
//     React.createElement(App),
//   ])
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   _jsx(Fragment, {
//     children: [
//       _jsx("h1", { className: "completed", children: "Todo List" }),
//       _jsx(App),
//     ],
//   })
// );
