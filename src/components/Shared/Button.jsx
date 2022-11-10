import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  // children - because the component is going to wrpped around whatever text for the button. So that would be the children
  // Version - that will be 'primary' or 'secondary' and that will relate to a partucular class
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {/* - btn is the class thats always wanted - the core button styling e.g padding etc
           - btn-version then uses the template literal to choose the primary or secondary color {conditionally}
          */}
      {/* - className={`btn btn-${version}` - THIS adds the button version class conditionally - vid20 2:20 */}
      {children}
      {/*children is whatever the (button) component is wrapped around */}
    </button>
  );
}
//vid20 2:58 delete a work out how to write the default props
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

//Vid20 3:55 delete and rewrite the proptypes below
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
