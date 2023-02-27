import { useState } from "react";
import { useContext, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import RandomGreeting from "./RandomGreeting";
import RatingSelect from "./RatingSelect";
import FeedbackList from "../FeedbackList";
import FeedbackData from "../../data/FeedbackData";
import FeedbackStats from "./FeedbackStats";
import FeedbackContext from "../../Context/FeedbackContext";

function FeedbackForm() {
  const [feedback] = useState(FeedbackData);
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
 

  const handleTextChange = (event) => {
    const inputLengthCheck = event.target.value;
    if (event.target.value === "") {
      setbtnDisabled(true);
      setMessage(null);
    } 
    else if (inputLengthCheck.length < 10) {
      setbtnDisabled(true);
      setMessage("Please enter 10 or more characters");
    } else {
      setbtnDisabled(false);
      setMessage("Press send when feedback complete");
    }

    setText(event.target.value); 
    console.log(event.target.value + "  thiss");
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 

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
        
      />
    </Card>
  );
}

export default FeedbackForm;

