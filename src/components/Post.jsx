//import {} from "react-router-dom";
//import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

function Post() {
  const status = 200;
  const navigate = useNavigate();
  const onClick = () => {
    console.log("hello");
    navigate("/about");
  };
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post </h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default Post;
