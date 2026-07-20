import { useState } from "react";
import Form from "./components/Form";
import ThemeToggle from "./components/ThemeToggle";

function App() {

  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
      <button onClick={() => setCount(0)}>RESET</button> <br /><br />

      <Form />
      <ThemeToggle />
    </>
  )
}

export default App;