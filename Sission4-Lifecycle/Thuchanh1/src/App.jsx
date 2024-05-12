import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import OrderForm from "./components/OrderForm";
import Clock from "./components/Clock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter /> */}
      {/* <OrderForm /> */}
      <Clock />
    </>
  );
}

export default App;
