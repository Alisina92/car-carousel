import React from "react";
import useInterval from "use-interval";

const ControlCenter = (props) => {
  console.log(props.controlStateIndex - 1);

  const forwardChangeHandle = () => {
    if (props.controlStateIndex < props.images.length - 1) {
      props.setControlStateIndex(props.controlStateIndex + 1);
    } else {
      props.setControlStateIndex(0);
    }
  };

  const backwardChangeHandle = () => {
    if (props.controlStateIndex > 0) {
      props.setControlStateIndex(props.controlStateIndex - 1);
    } else {
      props.setControlStateIndex(props.images.length - 1);
    }
  };

  useInterval(
    () =>
      props.setControlStateIndex(
        props.autoControl === "back"
          ? backwardChangeHandle
          : forwardChangeHandle
      ),
    props.autoControl ? 2000 : null
  );

  return (
    <div>
      <button onClick={() => {props.setAutoControl("back");}}className="ATBW-BTN">Auto-Backward</button>
      <button onClick={backwardChangeHandle} className="BW-BTN">Backwards</button>
      <button onClick={()=>{props.setAutoControl(false)}}className="stop-BTN">Stop</button>
      <button onClick={forwardChangeHandle} className="FW-BTN">Forwards</button>
      <button onClick={() => {props.setAutoControl("forward");}} className="ATFW-BTN">Auto-Forward</button>
    </div>
  );
};

export default ControlCenter;
