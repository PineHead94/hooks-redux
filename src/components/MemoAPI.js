import { memo, useEffect } from "react";

function MemoAPI() {
  useEffect(() => {
    console.log("runs on every render useEffect but inside memo api");
  });
  return <div className="main-container">Memo API</div>;
}

export default memo(
  MemoAPI
); /* can be done while importing also, but this component that has to be outside main exported function (that has been imported in App.js)as, re-render of main component will cause re-render of function also */
