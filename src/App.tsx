import { useState } from "react";
import { Button } from "./components/ui/button";

import styles from "./styles.module.css";
import { Slider } from "./components/ui/slider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className={styles.counter}>
        <Button onClick={() => setCount(count - 1)}>-</Button>
        <label htmlFor="">{count}</label>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>
      <Slider
        defaultValue={[count]}
        value={[count]}
        max={100}
        step={1}
        onValueChange={(e) => {
          setCount(e[0]);
        }}
      />
    </div>
  );
}

export default App;
