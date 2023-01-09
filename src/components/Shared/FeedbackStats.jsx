import { useContext } from "react";
//ERROR HAPPENS WHEN THE IMPORT BELOW IS NOT COMMENTED
import FeedbackContext from "../../Context/FeedbackContext";
//import FeedbackContext from "/home/jonny5800/repos/sandbox/react/feedback-application/src/Context/FeedbackContext.js";
//--The full path---home/jonny5800/repos/sandbox/react/feedback-application/src/Context/FeedbackContext.js"
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //calculating average review
  let averageRating =
    feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedback.length;
  // 0 is the defaut for the accumulator
  console.log(averageRating + "this is the average rating");
  //averageRating = averageRating.toFixed(1).replace(/[.,]0$/, "");
  // THIS will only show a decimail if it is not zero

  return (
    <div className="feedback-stats">
      <h4> Reviews: {feedback.length}</h4>
      <h4>
        Rating:{" "}
        {isNaN(averageRating) ? 0 : Math.round(averageRating * 100) / 100}
      </h4>
    </div>
  );
}

export default FeedbackStats;
