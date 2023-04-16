import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RES":
      return 0;

    default:
      return state;
  }
};

const App = () => {
  const [counter, dispatchCounter] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatchCounter({ type: "DEC" })}>-</button>
      <button onClick={() => dispatchCounter({ type: "RES" })}>reset</button>
      <button onClick={() => dispatchCounter({ type: "INC" })}>+</button>
    </div>
  );
};

export default App;
