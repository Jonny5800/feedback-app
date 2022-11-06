import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types ";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback </p>;
  }
  console.log(feedback);

  return (
    <div className="feedback-list">
      {/*Below - This is where "list was"*/}
      {feedback.map((item) => (
        /*"ITEM", in this case is whichever element is being iterated through at the time */
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rrating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
{
  /*map feedback
return the rating of each item into a div
need a key for item
display the list from feedback item
 */
}
