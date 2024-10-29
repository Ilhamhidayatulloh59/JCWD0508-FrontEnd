import { useDispatch } from "react-redux"
import DisplayCounter from "./components/display"
import { decrement, increment } from "./store/counterSlice"
import DisplayCounter2 from "./components/display2"

import { useCounter } from "./context/counterContext";
import CountDown from "./components/countDown";

function App() {
  const dispatch = useDispatch()
  const { count, increment: inc, decrement: dec } = useCounter();
  return (
    <div>
      {/* redux version */}
      <button onClick={() => dispatch(increment())} >increment</button>
      <DisplayCounter />
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <DisplayCounter2 />

      {/* context version */}
      <button onClick={inc}>increment</button>
      <h1>{count}</h1>
      <button onClick={dec}>decrement</button>

      <CountDown />
    </div>
  );
}

export default App;
