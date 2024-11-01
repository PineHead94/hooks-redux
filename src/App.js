import logo from "./logo.svg";
import "./App.css";
import {
  forwardRef,
  lazy,
  memo,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import EffectHook from "./components/EffectHooks.js";
import MemoAPI from "./components/MemoAPI.js";
import LazyAPI from "./components/LazyAPI.js";
import CalllbackHook from "./components/CallbackHook.js";
import ForwardRef from "./components/ForwardRef.js";
import { Provider } from "react-redux";
import DataComponent from "./components/DataComponent.js";
import store from "./store.js";

function App() {
  const [reRender, setRerender] = useState(false);
  const [state, setState] = useState(1);
  const [apiData, setApiData] = useState(null);
  const LazyComponent = lazy(() => import("./components/LazyAPI.js"));
  // const MemoizedComponent = memo(MemoAPI); /* this should not be in <> while importing, not recommened as one more variable will be declared */
  const ref = useRef();
  const componentRef = useRef();
  function valueInputForwardRef(ref) {
    console.log(ref);
  }
  const propForMemoApi = useMemo(
    () => reRender,
    []
  ); /* as prop change will cause rerender for a memoized component or memo api */

  const calculate = useMemo(() => {
    let value = state;
    console.log("use memo ran", value);
    return value;
  }, [state]);

  // useMemo hook to keep a memoized value as runs on initail render and when state but for optimization we keep a memoized value

  useEffect(() => {
    console.log("runs on every render");
  });

  useEffect(() => {
    console.log("Runs when reRender state is changed");
  }, [reRender]);

  return (
    <div className="App">
      <div className="hooks-main-container">
        <button onClick={() => setRerender((previous) => !previous)}>
          Re-render
        </button>
        <button
          onClick={() => {
            setState((previous) => previous + 1);
            ref.current++;
          }}
        >
          Set Number
        </button>
        {/* <h1 className="heading-text">{calculate}</h1> */}
        {/* <CalllbackHook reRendered={reRender} /> */}
        {/* <EffectHook /> */}
        {/* <MemoAPI propForMemoApi={propForMemoApi} /> */}
        {/* <input type="text" className="app-input" ref={ref} /> */}
        {/* <div className="lazy-main-container">
        <div className="lazy-wrapper">
          <Suspense fallback={<>Loading data..</>}>
            <LazyComponent />
          </Suspense>
        </div>
        </div> */}
        <ForwardRef
          data="Forward ref props"
          valueInputForwardRef={valueInputForwardRef}
          ref={componentRef}
        />
      </div>
      <div className="redux-container">
        <Provider store={store}>
          <DataComponent />
        </Provider>
      </div>
    </div>
  );
}

export default App;
