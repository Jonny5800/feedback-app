import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
//import { useContext } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This 1 item is from FeedbackContext",
      rating: 5,
    },
    {
      id: 2,
      text: "This 2 item is from FeedbackContext",
      rating: 7,
    },
    {
      id: 3,
      text: "This 3 item is from FeedbackContext",
      rating: 4,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false, //this is a boolean
  });
  {
    /*
Explanation of above:
SetFeedbackEdit - Function to change feedbackEdit
Inside useState() - an object with an item 
Item inside the object - whichever one being edited
When edit clicked - id, rating & text will go into the object/item's {}
edit: false - default to this but true when clicked i.e edit mode


*/
  }
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    console.log("from app", id);
    /*this log checks that the log comes from the original onClick */
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //^^this generates and adds a new ID
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  //Update feedbackItem:
  //ID so we know which one is being updated>
  //updItem - this is the new data

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //Sets item to be updated - EDIT
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  {
    /*
Explanation of above:
Item - so that we know which one is to be edited from feedbackEdit
() - passing in an object that is filled with that item
Edit - set to true
*/
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
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
