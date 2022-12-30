import { createContext, useState } from "react";
import FeedbackStats from "../components/Shared/FeedbackStats";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from FeedbackContext",
      rating: 10,
    },
  ]);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    console.log("from app", id);
    /*this log checks that the log comes from the original onClick */
  };

  {
    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      //^^this generates and adds a new ID
      console.log(newFeedback);
      setFeedback([newFeedback, ...feedback]);
    };
  }
  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

{
  /*DeleteFeedback function was in App.js 
Copy pasted the function into the context (the feedback contexct above)
To use the deleteFeedback function in a component via context, the function name needs to be passed into the Value of the context i.e feedback, deleteFeedback
*/
}
