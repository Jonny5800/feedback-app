import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  const status = 200;
  const navigate = useNavigate();
  const onClick = () => {
    console.log("button clicked");
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post </h1>
      <button onClick={onClick}>Click Me</button>
      <Routes>
        <Route path="/post" />
      </Routes>
      <h1>This is a h1 element /post BUT why does it sho on both</h1>
      <Routes>
        <Route
          path="/show"
          element={<h1>This is a h1 element /post/show /</h1>}
        />
      </Routes>
    </div>
  );
}

export default Post;
