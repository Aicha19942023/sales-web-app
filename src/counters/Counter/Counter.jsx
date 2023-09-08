import { number } from "prop-types";
import useCounter from "../../hooks/useCounter";

export default function Counter({ initialValue = 0, step = 1 }) {
  const [counter, { increment, descrement }] = useCounter(initialValue, step);
  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>+{step}</button>
      <button onClick={descrement}>-{step}</button>
    </>
  );
}
Counter.propTypes = {
  initialValue: number,
  step: number,
};
