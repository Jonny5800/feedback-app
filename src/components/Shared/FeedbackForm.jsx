import { useState } from "react";
/*Component level state - Typically when you have a form youre going to have apiece of state for each input in the form. So for the text input this requires setting a piece of state. To set that piece of state 'useState' hook is needed. Important that it says from "react" */
import Card from "./Card";
import Button from "./Button";

import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  //The text constant can be called anythinging
  //The method/function to update the pece of state is setText.
  //setText will be destructured by using useState below.
  //The default value for useState is in the parenthesis. Here its an empty string.
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us</h2>
        {/*Below - Passing in a prop of select which will be a function 
             -The select prop 'rating' is being passed in which is caught in the ratingSelect function
             -select is a function and that is being called by the ratingSelect function*/}
        <RatingSelect
          select={(rating) => {
            console.log(rating);
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
    </Card>
  );
}

export default FeedbackForm;

/*
for the 'input-group' class name - type a fullstop and then the classname that you want the div to have

for the input - type 'input' with a colon and then 'text' and it will automatically create the input for you 
*/
