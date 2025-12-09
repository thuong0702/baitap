import useCounter from "../hooks/useCounter"; // Sửa đường dẫn

export default function Counters() {
  const counter1 = useCounter(0);
  const counter2 = useCounter(0);

  return (
    <div>
      <h2>Counter 1: {counter1.count}</h2>
      <button onClick={() => counter1.increase(1)}>Add 1</button>

      <hr />

      <h2>Counter 2: {counter2.count}</h2>
      <button onClick={() => counter2.increase(2)}>Add 2</button>
    </div>
  );
}
