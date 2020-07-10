import React, {useState} from "react";
import PropTypes from "prop-types";
import CodeExample from "./CodeExample";

const Example = (props) => {
  const [showCode, setShowCode] = useState(false);
  const { code, description, name } = props.example;

  const toggleCode = event => {
    event.preventDefault();
    setShowCode(!showCode);
  };

  const ExampleComponent = require(`./examples/${props.componentName}/${name}`).default;

  return (
    <div className="example">
      {description && <h4>{description}</h4>}
      <div className="dispContainer">
      <ExampleComponent />
      </div>
      <p className="toggleCode" >
        {/* eslint-disable-next-line  */}
        <a href="#" onClick={toggleCode} >
          {showCode ? "Hide" : "Show"} Code
        </a>
      </p>

      {showCode && <CodeExample>{code}</CodeExample>}
    </div>
  );
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};

export default Example;
