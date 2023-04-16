import { useContext } from "react";
import CounterContext from "../CounterContext";

const Display = () => {
  const [counter, counterDispatch] = useContext(CounterContext);
  return <div>{counter}</div>;
};

export default Display;
