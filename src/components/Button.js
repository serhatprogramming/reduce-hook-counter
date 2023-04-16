import { useDispatch } from "../CounterContext";

const Button = ({ type, label }) => {
  const counterDispatch = useDispatch();
  return <button onClick={() => counterDispatch({ type })}>{label}</button>;
};

export default Button;
