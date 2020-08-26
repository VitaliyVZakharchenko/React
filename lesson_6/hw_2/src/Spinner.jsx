import React from "react";

const Spinner = (props) => {
  const spinnerStyle = {
    width: props.size,
    height: props.size,
  };

  return <span className="spinner" style={spinnerStyle}></span>;
};

export default Spinner;
