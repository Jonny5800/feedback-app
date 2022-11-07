//***import React from 'react'***
//rfce creates the header function and default export.
//_rfce creates it without the import at the top

//impt - this creates the propTypes below
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  //Why deos it need to be "props" or {}
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  //Inline JSX styles need double curly brqces >> style ={{}} << - can google the syntax
  //That inline style can then be placed in a variable and the the variable name put in place for cleanness syle = {variableName}
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

//Below - If nothing is specifically passed into the Header (text, a background color or color for text, these will be used as the default)
Header.defaultProps = {
  text: "FeedBack thingzzz",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

//Below - PropTypes works to make it more robust and possibly flag up issues early on
//Using.isRequired, this flags a warning in the console if the wrong format of input is recived

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
