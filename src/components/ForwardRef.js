import { forwardRef } from "react";

function ForwardRef(props, ref) {
  return (
    <div className="">
      <div className="forward-ref-main-container">Forward ref component</div>
      <div className="forward-ref-main-container">{props.data}</div>
      <input
        type="text"
        className="forward-ref-input"
        ref={ref}
        value={"Forward ref input element"}
        onChange={() => props.valueInputForwardRef(ref)}
      />
    </div>
  );
}

export default forwardRef(ForwardRef);
