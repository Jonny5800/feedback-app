import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //return <div className={`card ${reverse && "reverse"} `}>{children}</div>;
  /*Above condiional(ternary) class- If reverse, then use the css class of reverse for card */

  //Below - conditional styling i.e - if reverse, then background color set to rgba()0,0,0,0.4 else #fff
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba()0,0,0,0.4" : "#fff",
        color: reverse ? "#fff" : "rgba(o,0,0,0.4)",
      }}
    >
      {children}
    </div>
  );
  //Above - if using a conditional style inline, then the css component can be deleted BUT if the condidional CLASS is used then it needs to be kept in the css
}
Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
