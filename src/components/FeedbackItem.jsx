import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import Card from "./Shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  //inside the {} is what is pulled out of FeedbackContext via context
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
