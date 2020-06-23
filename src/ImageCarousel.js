import React from "react";

const ImageCarousel = (props) => {
  return (
    <div>
      <img
        className="car-image"
        src={props.images[props.controlStateIndex]}
        alt="Eastern Bloc Cars"
      />
    </div>
  );
};

export default ImageCarousel;
