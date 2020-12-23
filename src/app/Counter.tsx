import * as React from "react";

export function Counter({ initial = 0 }) {
  const [count, setCount] = React.useState(initial);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
