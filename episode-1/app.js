/** <div id="parent">
 *    <div id="child">
 *      <h1>Im h1 tag</h1>
 *      <h2>Im h2 tag</h2>
 *    </div>
 * </div>
 * const parent = React.createElement(
 * "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag"),
  ])
);
*/
// const heading = React.createElement("hi", {}, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading = React.createElement("h1", { id: "title" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "title" }, "heading2");
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
