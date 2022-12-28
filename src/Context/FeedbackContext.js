import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from Context",
      rating: 10,
    },
  ]);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

{
  /*

A provider needs to be created so that the components in App.js for example FeedbackForm, (the props will no longer be passed in) so they can still get acces to the State and the Context, everything will be wrapped in a provider, something like everything being wrapped in a Router

export const
All components are wrapped  and feedbackProvider takes in children (just like a component that takes in children)


What is returned from FeedbackProvider is everything that is wrapped within FeedbackContext.Provider. 
Anything that is wrapped in FeedbackContext.Provider  will be the children that are passeed in. Those children eventually are all the components that need access to the context

Any values that are passed in to the FeedbackContextProvider e.g state or any functions to use are passed into a prop of value, which is an object.

For State - the hook, useState is used even though reducers can also be used. Bacause there isnt much state, useState keeps it simple.
---const [feedback, setFeedback] = useState([]);
*/
}
