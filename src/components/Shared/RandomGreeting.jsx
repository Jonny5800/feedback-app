import React from "react";

function RandomGreeting(props) {
  const { make, model } = props;
  return (
    <div>
      <h3>
        The computer make is {make} and the model is {model}
      </h3>
    </div>
  );
}

export default RandomGreeting;

