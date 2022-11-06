//import React from "react"; NOT NEEDED (rfce adds it in automatically)
import Card from "./Shared/Card";
import PropTypes from "prop-types";

//Below - Use state is a hook
//import { useState } from "react"; - removed when item.rating & item.text is used
//Above - use state is used in conjunction with the two const's below as...
/*
...const [rating, setRating] = useState(7);
  const [text, setText] = useState("Default feedback text");
*/

//The rating as well as the text can be part of the "state" here (state just being data)

function FeedbackItem({ item }) {
  //state in reaxt is immutable and so it has to be re-set because you cant directly change it like...xrating = 10x
  /*const handleClick = () => {
    setRating((values) => {
      console.log(values);
      return values + 1;
    });
  };
  */
  //Below - this is settigng a piece of state (like 'declaring' data)
  /*const [rating, setRating] = item.rating; /*useState(7) this DID provide a default item number of 7*/
  /* const [text, setText] = item.text; /*useState("Default feedback text")*/
  //above - Whtever goes in the parenthises of useState becomes the default e.g(7)
  //Above - Inside >[]< is destructuring an array from what the useState function returns.
  //[nameOfPieceOfState, functionToUpdatePieceOfState (called "set" and then whatever the name is) ]

  return (
    <Card reverse={1}>
      {/*****ERROR***s - capital C for card causes an issue in the console */}
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
