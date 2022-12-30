import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <button className="su-button" onClick={handleClick}>Clicked {count} times!</button>
  );
}