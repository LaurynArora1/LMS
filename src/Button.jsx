import React from "react";
import { useState } from "react";
import "./button.css";

function Button() {
  const [count, setCount] = useState(0);
  function handleAddClick() {
    setCount(count + 1);
  }
  function handleSubClick() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="container">
        <text>{count}</text>
        <div className="btnGrp">
          <button onClick={handleAddClick} className="btn">
            Add
          </button>
          <button onClick={handleSubClick} className="btn">
            Sub
          </button>
        </div>
      </div>
    </>
  );
}
export default Button;
