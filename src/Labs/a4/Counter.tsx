import React, { useState } from "react";
function Counter() {
  // let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;
// import useState


// create and initialize
// state variable


// render state variable
// handle events and update
// state variable with mutator
// now updates to the state
// state variable do update the
// DOM as desired

