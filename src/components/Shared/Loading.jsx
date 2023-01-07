import loading from "../assets/loading.gif";

function Loading() {
  return (
    <img
      src={loading}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", dispay: "block" }}
    />
  );
}

export default Loading;

// function Spinner() {
//   return (
//     <img
//       src={loading}
//       alt="Loading..."
//       style={{ width: "100px", margin: "auto", dispay: "block" }}
//     />
//   );
// }

// export default Spinner;
