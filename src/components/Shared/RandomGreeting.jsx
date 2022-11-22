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

// destructuring makes it possible to unpack values from arrays or properties from objects into distinct variables.
//In react it improves code readability

// function RandomGreeting(props) {
//   const { make, model } = props;
//   return (
//     <div>
//       <h3>
//         The computer make is {make} and the model is {model}
//       </h3>
//     </div>
//   );
// }

// export default RandomGreeting;
