import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "./components/Header";
// - Replaced by FeedbackList - import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/Shared/FeedbackStats";
import FeedbackForm from "./components/Shared/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
//Below is JSX - allows writing HTML within components

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

    /*BELOW -want to set the feedback to the new array minus the idem beign deleted (its goins to set the feedback value in the CONST above) */

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
            <Route path="/" element={<FeedbackForm handleAdd={addFeedback} />}>
              <Route path="/" element={<FeedbackStats feedback={feedback} />} />

              {/*this feedback prop passes in the entire feedback array. */}
              {
                /* Because feedabxk is our state, whenever it changes this will automatically update the FeedbackStats component
        - same mechanics as FeedbackList below */
                ///> */
              }
              <Route
                path="/"
                element={
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                }
              />
              {/*<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />*/}
            </Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}
//
export default App;

// State is just data - it can be local to a specific component or global and accesible to all comonents if neee be

// return (
//   <Router>
//     <>
//       {/*BELOW - these are props (stylingTag tags) and need to be "caught in the header.jxs to be activated"
//        */}
//       <Header /*{/*StyleVariable="red"*/ />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<FeedbackForm handleAdd={addFeedback} />}>
//             <Route path="/" element={<FeedbackStats feedback={feedback} />} />

//             {/*this feedback prop passes in the entire feedback array. */}
//             {
//               /* Because feedabxk is our state, whenever it changes this will automatically update the FeedbackStats component
//         - same mechanics as FeedbackList below */
//               ///> */
//             }
//             <Route
//               path="/"
//               element={
//                 <FeedbackList
//                   feedback={feedback}
//                   handleDelete={deleteFeedback}
//                 />
//               }
//             />
//             {/*<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />*/}
//           </Route>

//           <Route path="/about" element={<AboutPage />} />
//         </Routes>
//       </div>
//     </>
//   </Router>
// );
