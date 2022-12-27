import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "./components/Header";

import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/Shared/FeedbackStats";
import FeedbackForm from "./components/Shared/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //^^this generates and adds a new ID
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
    //Above - Adding this feedback input to the U.I list
    //Whenever adding, deleting or updating, setFeedback is used
    //The setState is immutable and so it must be copied.
    //1- setFeedback([]) - set to an array
    //2- ([...]) - Using spread operator
    //3- ([...feedback]) - Taking the existing feedback and putting it in the array
    //4- ([newFeedback,...feedback]) - putting the newFeedback at the start of the existing feedback array
    // This works because 'feedback' comes from the global feedback state and is then updated
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }

    console.log("from app", id);

    /*this log checks that the log comes from the original onClick */
  };
  return (
    <Router>
      <>
        {/*BELOW - these are props (stylingTag tags) and need to be "caught in the header.jxs to be activated"
         */}
        <Header /*{/*StyleVariable="red"*/ />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<FeedbackForm handleAdd={addFeedback} />}
            >
              <Route
                path="/statss"
                element={<FeedbackStats feedback={feedback} />}
              />

              {/*<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />*/}
            </Route>
            <Route
              path="/testing"
              element={
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post" element={<Post />} />{" "}
            {/*The post is temp to see how it works*/}
          </Routes>

          <AboutIconLink />
        </div>
      </>
    </Router>
  );
}
//
export default App;

// State is just data - it can be local to a specific component or global and accesible to all comonents if neee be

// ABOUT PAGE WORKS, FEEDBACK FORM SHOWS BUT OTHER COMPONENTS DO NOT RENDER

// <Router>
//       <>
//         {/*BELOW - these are props (stylingTag tags) and need to be "caught in the header.jxs to be activated"
//          */}
//         <Header /*{/*StyleVariable="red"*/ />
//         <div className="container">
//           <Routes>
//             <Route path="/" element={<FeedbackForm handleAdd={addFeedback} />}>
//               <Route path="/" element={<FeedbackStats feedback={feedback} />} />

//               {/*this feedback prop passes in the entire feedback array. */}
//               {
//                 /* Because feedabxk is our state, whenever it changes this will automatically update the FeedbackStats component
//         - same mechanics as FeedbackList below */
//                 ///> */
//               }
//               <Route
//                 exact
//                 path="/"
//                 element={
//                   <FeedbackList
//                     feedback={feedback}
//                     handleDelete={deleteFeedback}
//                   />
//                 }
//               />
//               {/*<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />*/}
//             </Route>

//             <Route path="/about" element={<AboutPage />} />
//           </Routes>
//         </div>
//       </>
//     </Router>
