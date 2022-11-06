import { useState } from "react";
import React from "react";
import Header from "./components/Header";
// - Replaced by FeedbackList - import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
//Below is JSX - allows writing HTML within components

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      {/*BELOW - these are props (stylingTag tags) and need to be "caught in the header.jxs to be activated"
       */}
      <Header /*{/*StyleVariable="red"*/ />
      <div className="container">
        <FeedbackList feedback={feedback} />
        {/*FeedbackItem - was replaced by FeedbackList*/}
      </div>
    </>
  );
}

export default App;

// State is just data - it can be local to a specific component or global and accesible to all comonents if neee be
