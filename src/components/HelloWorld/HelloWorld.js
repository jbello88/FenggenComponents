import React from "react";
import PropTypes from "prop-types";

/** A super lame component */
function HelloWorld({ message }) {
  return <div>{message}</div>;
}

HelloWorld.propTypes = {
  /** message to display */
  message: PropTypes.string.isRequired
};

HelloWorld.defaultProps = {
  message: "World"
};

export default HelloWorld;
