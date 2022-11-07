function FeedbackStats(feedback) {
  return (
    <div className="feedback-stats">
      <h4> Reviews {feedback.length}</h4>
      <h4>Average Rating</h4>
    </div>
  );
}

export default FeedbackStats;
