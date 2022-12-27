import React from "react";
import Card from "../components/Shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app for leaving feedback on something</p>
        <p>version 1.0.0</p>
        <Link to="/">Back to home page</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
