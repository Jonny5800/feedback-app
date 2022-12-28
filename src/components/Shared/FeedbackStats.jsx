import PropTypes from "prop-types";

import { useContext } from "react";

import FeedbackContext from "../Context/FeedbackContext";
function FeedbackStats({ feedback }) {
  //calculating average review
  let averageRating =
    feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedback.length;
  // 0 is the defaut for the accumulator
  console.log(averageRating);
  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, "");
  // THIS will only show a decimail if it is not zero
  return (
    <div className="feedback-stats">
      <h4> Reviews: {feedback.length}</h4>
      <h4>Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};
export default FeedbackStats;
