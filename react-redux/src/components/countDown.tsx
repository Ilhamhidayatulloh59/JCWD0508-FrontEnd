import { useEffect, useState } from "react";

function CountDown() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (time >= 3000) return;

    setTimeout(() => {
      setTime(time + 1);
    }, 1);
  }, [time]);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default CountDown;
