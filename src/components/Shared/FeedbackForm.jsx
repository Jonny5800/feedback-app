import { useState } from "react";
/*Component level state - Typically when you have a form youre going to have a piece of state for each input in the form. So for the text input this requires setting a piece of state. To set that piece of state 'useState' hook is needed. Important that it says from "react" 
Piece of state - i.e the text written into an input or the value of a selected radio button*/
import Card from "./Card";
import Button from "./Button";
import RandomGreeting from "./RandomGreeting";
import RatingSelect from "./RatingSelect";
import FeedbackList from "../FeedbackList";
import FeedbackData from "../../data/FeedbackData";
import FeedbackStats from "./FeedbackStats";

function FeedbackForm({ handleAdd }) {
  //The text constant can be called anythinging
  //The method/function to update the pece of state is setText.
  //setText will be destructured by using useState below.
  //The default value for useState is in the parenthesis. Here its an empty string.

  const [feedback, setFeedback] = useState(FeedbackData);
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }

    /*BELOW -want to set the feedback to the new array minus the idem beign deleted (its goins to set the feedback value in the CONST above) */

    console.log("from app", id);

    /*this log checks that the log comes from the original onClick */
  };

  const handleTextChange = (rando) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage("Please enter more than 10 characters");
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }

    //console.log(rando.target.value); This logs the value from the text input
    setText(rando.target.value); //The value from the text input is set to the text value
    //TEXT STATE - the const&function for handleTextChange above
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //^^This prevents defaut behaviour (e.prevent) - Which is submitting to the actual file - Used because it is a form-submit
    //Below - This just double checks to make sure 10 charag=cters are entered

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
        //constructing a new object - 'newFeedback'
        /*This is a shorthand to make a key, value pair. 
        i.e {text:text, rating:rating} */
        //'text'(not shown) is the key and 'text' is input from the handleChange function, and that comes from the the U.I text field.Same with the rating
      };
      handleAdd(newFeedback);
      //setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        {/*Below - Passing in a prop of select which will be a function 
             -The select prop 'rating' is being passed in which is caught in the ratingSelect function
             -select is a function and that is being called by the ratingSelect function*/}
        <RandomGreeting make="apple" model="mac book" />
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
        {/*if there is a message THEN create a div with the classname of message.
              Whatever is put into the message state will end up in {message} here */}
      </form>
      <FeedbackStats />

      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </Card>
  );
}

export default FeedbackForm;

/*
for the 'input-group' class name - type a fullstop and then the classname that you want the div to have

for the input - type 'input' with a colon and then 'text' and it will automatically create the input for you 
*/
