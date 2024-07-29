import React from "react";
import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  function increaseClick() {
    return setCount(count + 1);
  }

  function decreaseClick() {
    return setCount(count - 1);
  }

  return (
    <>
      {count < 0 ? (
        <p className="main-p">You have no Lavenders left! Please get some!</p>
      ) : count === 0 || count === 1 ? (
        <p className="main-p">You have {count} Lavender!</p>
      ) : (
        <p className="main-p">You have {count} Lavenders!</p>
      )}
      <br />
      <div className="btn">
        <button onClick={increaseClick}>Buy</button>
        <button onClick={decreaseClick}>Return</button>
      </div>
    </>
  );
}

export default Main;
