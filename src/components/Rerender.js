/** this approach will cause re-renders to child components when parent component re-renders due to state change of parent component, child component can also re-render when props changes */
function ComponentOne() {
  return (
    <div className="component-one-container">
      <h1 className="component-one-text">Component One</h1>
    </div>
  );
}
function ComponentTwo() {
  return (
    <div className="component-two-container">
      <h1 className="component-two-text">Component Two</h1>
    </div>
  );
}
function ComponentThree() {
  return (
    <div className="component-three-container">
      <h1 className="component-three-text">Component Three</h1>
    </div>
  );
}
function ComponentFour() {
  return (
    <div className="component-four-container">
      <h1 className="component-four-text">Component Four</h1>
    </div>
  );
}
const MainComponent = () => {
  /** this approach will cause components to RE-MOUNT declaring component inside main function which is exported will cause RE-RENDER */
  // const Test = function ComponentOne() {
  //   return (
  //     <div className="component-one-container">
  //       <h1 className="component-one-text">Component One</h1>
  //     </div>
  //   );
  // };
  // function ComponentTwo() {
  //   return (
  //     <div className="component-two-container">
  //       <h1 className="component-two-text">Component Two</h1>
  //     </div>
  //   );
  // }
  // function ComponentThree() {
  //   return (
  //     <div className="component-three-container">
  //       <h1 className="component-three-text">Component Three</h1>
  //     </div>
  //   );
  // }
  // function ComponentFour() {
  //   return (
  //     <div className="component-four-container">
  //       <h1 className="component-four-text">Component Four</h1>
  //     </div>
  //   );
  // }
  return (
    <div className="main-component-container">
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
    </div>
  );
};

export default MainComponent;
// export { ComponentOne, ComponentTwo, ComponentThree, ComponentFour };
