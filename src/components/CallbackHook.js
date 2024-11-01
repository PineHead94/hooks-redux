import { useCallback, useEffect, useState } from "react";

export default function CalllbackHook(props) {
  const [data, setData] = useState(null);
  const [call, setCall] = useState(false);
  const [numb, setNumb] = useState(1);

  //   useEffect(() => console.log("callback hook initial render effect"), []);

  const apiCall = useCallback(
    (numb) => {
      console.log("useCallback memoization");
      fetch(`https://jsonplaceholder.typicode.com/todos/${numb}`)
        .then((data) => data.json())
        .then((res) => setData(res));
      //   console.log("callback");
    },
    [numb]
  );

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${numb}`)
      .then((data) => data.json())
      .then((res) => setData(res));
    console.log("effect");
  }, [numb]);

  (function initialRenderPrint() {
    console.log("function ran");
  })();
  //   this function can be changed with useEffect as runs on every render

  return (
    <div className="test">
      <button onClick={() => setNumb((p) => p + 1)}>Set Number</button>
      <button onClick={() => apiCall(numb)}>Call</button>
    </div>
  );
}
