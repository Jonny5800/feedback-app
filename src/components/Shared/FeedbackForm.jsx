import { useState } from "react";
import { useContext, useEffect } from "react";
// useEffect - Whenever feedbackEdit changes(when clicked on), we want "somethinbg to happen" i.e.the form to get the current text and rating from the current feedback.
// That is called a side effect.FeedbackData
// The way to deal with side effects with functional components and hooks is to use "useEffect".
// useEffect is called as a function i.euseEffect()
// It takes in
// 1 - a callback
// 2 - An array of dependencies
// If you put something in that array and it changes then the callback function will run.
// If the array is left wempty then the callback will just run when the componentloads.
// A good use for a useEffect is to fetch data from an API each time a page loads on a blog post because it will run just the once
import Card from "./Card";
import Button from "./Button";
import RandomGreeting from "./RandomGreeting";
import RatingSelect from "./RatingSelect";
import FeedbackList from "../FeedbackList";
import FeedbackData from "../../data/FeedbackData";
import FeedbackStats from "./FeedbackStats";
import FeedbackContext from "../../Context/FeedbackContext";

function FeedbackForm() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      //button, text and rating
      setbtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  // const deleteFeedback = (id) => {
  //   if (window.confirm("Are you sure to delete?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  const handleTextChange = (event) => {
    const inputLengthCheck = event.target.value;
    if (event.target.value === "") {
      setbtnDisabled(true);
      setMessage(null);
    } //else if (text.trim().length <= 10)
    else if (inputLengthCheck.length < 10) {
      setbtnDisabled(true);
      setMessage("Please enter 10 or more characters");
    } else {
      setbtnDisabled(false);
      setMessage("Press send when feedback complete");
    }

    setText(event.target.value); //The value from the text
    console.log(event.target.value + "  thiss");
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //<<<This prevents defaut behaviour (e.prevent) - Which is submitting to the actual file - Used because it is a form-submit

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>

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
      </form>
      <FeedbackStats />

      <FeedbackList
        feedback={feedback}
        //handleDelete={deleteFeedback}
      />
    </Card>
  );
}

export default FeedbackForm;

/*Component level state - Typically when you have a form youre going to have a piece of state for each input in the form. So for the text input this requires setting a piece of state. To set that piece of state 'useState' hook is needed. Important that it says from "react" 
Piece of state - i.e the text written into an input or the value of a selected radio button*/

{
  /*
 Explanation of feedbackForm
 The text constant can be called anythinging
  The method/function to update the pece of state is setText.
  setText will be destructured by using useState below.
The default value for useState is in the parenthesis. Here its an empty string.*/
}

/*
for the 'input-group' class name - type a fullstop and then the classname that you want the div to have

for the input - type 'input' with a colon and then 'text' and it will automatically create the input for you 
*/

//constructing a new object - 'newFeedback'
/*This is a shorthand to make a key, value pair. 
        i.e {text:text, rating:rating} */
//'text'(not shown) is the key and 'text' is input from the handleChange function, and that comes from the the U.I text field.Same with the rating
