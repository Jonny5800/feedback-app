import React from "react";
import Card from "../components/Shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app for leaving feedback on something</p>
        <p>version 1.0.0</p>
        <a href="/">Back to home page</a>
      </div>
    </Card>
  );
}

export default AboutPage;
