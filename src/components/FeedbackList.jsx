import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
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
            exit={{ opacity: 1 }}
          >
            {/*"ITEM", in this case is whichever element is being iterated
            through at the time */}
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              /***handleDelete={(id) => console.log(id)}.....This handleDelete LOG is replaced by the above line in order to forward the handleDelete towards App.js - it originates from FeedbackItem <button> onclick***/
              /*^^HandleDelete is a prop for feedback item SO this means that handleDelete needs to be in the FeedbackItem function parenthesis*/
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {/*Below - This is where "list was"*/}
  //     {feedback.map((item) => (
  //       /*"ITEM", in this case is whichever element is being iterated through at the time */
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete}
  //         /***handleDelete={(id) => console.log(id)}.....This handleDelete LOG is replaced by the above line in order to forward the handleDelete towards App.js - it originates from FeedbackItem <button> onclick***/
  //         /*^^HandleDelete is a prop for feedback item SO this means that handleDelete needs to be in the FeedbackItem function parenthesis*/
  //       />
  //     ))}
  //   </div>
  // );
}
//below - arrayOf
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;

/*map feedback
return the rating of each item into a div
need a key for item
display the list from feedback item
 */
