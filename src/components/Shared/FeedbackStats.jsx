import { useContext } from "react";

import FeedbackContext from "../../Context/FeedbackContext";


function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);


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
