import { createContext, useState, useEffect } from "react";

//import { useContext } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  // isLoadind is set to true by default until the request is menubar. THEN is is set to false
  const [feedback, setFeedback] = useState([
    //  MAkes the array empty and no hard coded fedback
    // {
    //   id: 1,
    //   text: "This 1 item is from FeedbackContext",
    //   rating: 5,
    // },
    // {
    //   id: 2,
    //   text: "This 2 item is from FeedbackContext",
    //   rating: 7,
    // },
    // {
    //   id: 3,
    //   text: "This 3 item is from FeedbackContext",
    //   rating: 4,
    // },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false, //this is a boolean (on/off switch)
  });
  useEffect(() => {
    console.log(123);
    fetchFeedback();
  }, []);

  //fetch feedack
  const fetchFeedback = async () => {
    const response = await fetch("/feedback");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  /*fetch("http://localhost:5000/feedback") 
  Added a proxy in package.json 
  So that the whole address doesnt need to be typed./*}

  //   {
  //     /*
  // Explanation of above:
  // SetFeedbackEdit - Function to change feedbackEdit
  // Inside useState() - an object with an item
  // Item inside the object - whichever one being edited
  // When edit clicked - id, rating & text will go into the object/item's {}
  // edit: false - default to this but true when clicked i.e edit mode

  // */
  //   }
  const deleteFeedback = async (id) => {
    if (window.confirm(`"Are you sure to delete?`)) {
      await fetch(`/feedback${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    console.log("from app", id);
    /*this log checks that the log comes from the original onClick */
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();

    //newFeedback.id = uuidv4(); (json server automatically creates an ID)
    //^^this generates and adds a new ID
    console.log(newFeedback);
    setFeedback([data, ...feedback]);
    //When setting the feedback, its being set to a array and spreading across the feedback thats already there.
    //Now, instead of adding newFeedback from before, it will add the data thats sent from the backend...'data'
    //setFeedback([newFeedback, ...feedback]) >>
    //setFeedback([data, ...feedback])
  };
  //Update feedbackItem:
  //ID so we know which one is being updated>
  //updItem - this is the new data

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //Sets item to be updated - EDITs
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //   {
  //     /*
  // Explanation of above:
  // Item - so that we know which one is to be edited from feedbackEdit
  // () - passing in an object that is filled with that item
  // Edit - set to true
  // */
  //   }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

// {
//   /*DeleteFeedback function was in App.js
// Copy pasted the function into the context (the feedback contexct above)
// To use the deleteFeedback function in a component via context, the function name needs to be passed into the Value of the context i.e feedback, deleteFeedback
// */
// }
