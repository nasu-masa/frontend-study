import { useState, useRef } from "react";

export function useCountdown() {
  const [time, setTime] = useState(10);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;
    const intervalId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    intervalRef.current = intervalId;
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    setTime(10);
    clearInterval(null);
  };

  return {
    time,
    start,
    stop,
    reset,
  };
}
