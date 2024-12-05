import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)}>-</button>
      <label htmlFor="">{count}</label>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
