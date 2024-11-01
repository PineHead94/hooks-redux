import { useEffect, useState } from "react";

export default function EffectHook() {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log("runs on every render");
  });

  useEffect(() => {
    console.log("only runs on initial render and when state changes");
  }, [state]);

  useEffect(() => {
    console.log("only runs on initial render");
  }, []);

  return (
    <div className="main-container-effect">
      <button
        className="effect-hook-button"
        onClick={() => setState((p) => !p)}
      >
        Run effect
      </button>
      <div className="effect-container">Test</div>
    </div>
  );
}

// (function initialRenderPrint() {
//   console.log("function ran");
// })() ===
//   useEffect(() => {
//     console.log("runs on every render");
//   });
