import { useState } from "react";
import React from "react";
import Header from "./components/Header";
// - Replaced by FeedbackList - import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/Shared/FeedbackStats";
//Below is JSX - allows writing HTML within components

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    {
      /*BELOW -want to set the feedback to the new array minus the idem beign deleted (its goins to set the feedback value in the CONST above) */
    }

    console.log("from app", id);
    {
      /*this log checks that the log comes from the original onClick */
    }
  };
  return (
    <>
      {/*BELOW - these are props (stylingTag tags) and need to be "caught in the header.jxs to be activated"
       */}
      <Header /*{/*StyleVariable="red"*/ />
      <div className="container">
        <FeedbackStats
          feedback={
            feedback
          } /*this feedback prop passes in the entire feedback array.
        Because feedabxk is our state, whenever it changes this will automatically update the FeedbackStats component
        - same mechanics as FeedbackList below */
        />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        {/*handleDelete is passed from feedbackList */}
        {/*FeedbackItem - was replaced by FeedbackList*/}
      </div>
    </>
  );
}

export default App;

// State is just data - it can be local to a specific component or global and accesible to all comonents if neee be
