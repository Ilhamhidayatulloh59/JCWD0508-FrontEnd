import { useEffect, useState } from "react";

function EffectComp() {
  const [count, setCount] = useState<number>(1);
  const [number, setNumber] = useState<number>(10);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      const users = await res.json();
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  };

  const incCount = () => {
    if (count == 10) {
      alert("data limit");
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    getData();
  }, [count]);

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={incCount}>+ count</button>
      <h2>number: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>+ number</button>
    </div>
  );
}

export default EffectComp;
