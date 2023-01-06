import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback </p>;
  }
  console.log(feedback);

  return (
    <div className="feedback-list">
      {/*Below - This is where "list was"*/}
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            iniial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            /*CARDS WILL FADE OUT BUT NOT FADE IN*/
          >
            {/*"ITEM", in this case is whichever element is being iterated
            through at the time */}
            <FeedbackItem
              key={item.id}
              item={item}
              //handleDelete={handleDelete} no longer needed
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;

// {
//   /*
// Explanation of handle delete in FeedbackItem
// /***handleDelete={(id) => console.log(id)}.....This handleDelete LOG is replaced by the above line in order to forward the handleDelete towards App.js - it originates from FeedbackItem <button> onclick***/
//   /*^^HandleDelete is a prop for feedback item SO this means that handleDelete needs to be in the FeedbackItem function parenthesis
//    */
// }
