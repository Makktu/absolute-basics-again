import { useState } from "react";

import Button from "./components/Button";
import DisplayArea from "./components/DisplayArea";

const App = () => {
  const [count, setCount] = useState(0);
  const [buttonSize, setButtonSize] = useState("sizeBtn-large");

  let testArr = [1, 2, 3, 4, 5];

  const rightClick = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  const handleClick = () => {
    setCount(count + 1);
    console.log("here");
  };

  const handleSizeChange = () => {
    if (buttonSize === "sizeBtn-large") {
      setButtonSize("sizeBtn-small");
    } else {
      setButtonSize("sizeBtn-large");
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <p className="the-count">{count}</p>
      <Button
        className={buttonSize}
        onClick={handleClick}
        onContextMenu={rightClick}
        value="CLICK +/- RIGHT-CLICK"
      ></Button>
      <br />
      <Button
        className={buttonSize}
        onClick={handleSizeChange}
        value="CHANGE BUTTON SIZE"
      ></Button>
      <p>
        {testArr.map((entry, ind) => {
          <p key={ind}>{entry}</p>;
        })}
      </p>
      <DisplayArea testArr={testArr} />
    </>
  );
};

export default App;
