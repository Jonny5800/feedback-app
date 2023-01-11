import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/Shared/FeedbackStats";
import FeedbackForm from "./components/Shared/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import { FeedbackProvider } from "./Context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import NotFound from "./Pages/NotFound";
import Practise from "./Pages/ForPractising";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<FeedbackForm />}>
                <Route path="/statss" element={<FeedbackStats />} />
              </Route>
              <Route path="/testing" element={<FeedbackList />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/post/*" element={<Post />} />
              <Route path="/practise" element={<Practise />} />
              <Route path="*" element={<NotFound />} />
              {""}
            </Routes>

            <AboutIconLink />
          </div>
        </>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
