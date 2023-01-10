import React from "react";
import PageNotFound from "../components/assets/PageNotFound.webp";

function NotFound() {
  return (
    <div>
      <img
        src={PageNotFound}
        alt="The page you are looking for is not here"
        style={{ width: "100%", margin: "auto", dispay: "block" }}
      />
      ;
    </div>
  );
}

export default NotFound;

//
