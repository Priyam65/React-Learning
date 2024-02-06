const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "react tags"),
      React.createElement("h2", {}, "Hi React"),
    ]),
  ],
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "react tags1"),
    React.createElement("h2", {}, "Hi React1"),
  ])
);

// const heading = React.createElement("h1", { id: "heading" }, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
