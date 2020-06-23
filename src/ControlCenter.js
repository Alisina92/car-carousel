import React from "react";

const ControlCenter = (props) => {
  console.log(props.controlStateIndex - 1);

  const forwardChangeHandle = () => {
    if (props.controlStateIndex < props.images.length - 1) {
      props.setControlStateIndex(props.controlStateIndex + 1);
    } else {
      props.setControlStateIndex(0);
    }
  };

  const BackwardChangeHandle = () => {
    if (props.controlStateIndex > 0) {
      props.setControlStateIndex(props.controlStateIndex - 1);
    } else {
      props.setControlStateIndex(props.images.length - 1);
    }
  };

  return (
    <div>
       
      <button onClick={BackwardChangeHandle} className="BW-BTN">
        Backwards
      </button>
      <button onClick={forwardChangeHandle} className="FW-BTN">
        Forwards
      </button>
    </div>
  );
};

export default ControlCenter;
