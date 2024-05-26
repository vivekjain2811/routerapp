import React from "react";
import { useNavigate } from "react-router-dom";
//import { useLinkClickHandler } from "react-router-dom";
function Labs() {
  const navigate = useNavigate();
  function ClickHandler() {
    navigate("/about");
  }
  return (
    <div>
      labs
      <button onClick={ClickHandler}>mobe trektrltrel;</button>
    </div>
  );
}
export default Labs;
