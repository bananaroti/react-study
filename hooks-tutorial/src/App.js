// import { useState } from "react";
// import Counter from "./Counter";
import Info from "./Info";

const App = () => {
  // const [visible, setVisible] = useState(false);
  return (
    <div>
      {/* <Counter></Counter> */}
      {/* <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr></hr>
      {visible && <Info></Info>} */}
      <Info></Info>
    </div>
  );
};

export default App;
