import React, { useState, useMemo, useRef } from "react";

const ClosestPrimeCalculator = () => {
  const [num, setNum] = useState(0);
  const numberRef = useRef();

  const isPrime = useMemo(() => {
    console.log("PRIME FUNCTION!!");
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }, [num]);

  return (
    <div>
      <input ref={numberRef} placeholder="Input number" />
      <button onClick={() => setNum(+numberRef.current.value)}>Compute</button>
      <div>{isPrime && <span>It's a prime number!</span>}</div>
    </div>
  );
};

export default ClosestPrimeCalculator;