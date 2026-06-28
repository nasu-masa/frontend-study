import { useState, useEffect, useLayoutEffect } from "react";

const Timer = ({ setIsDisp }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("end");
    };
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    window.localStorage.setItem("time-key", time);
    console.log("保存完了");
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  const handleToggle = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <>
      <h3>
        <span>Time : </span>
        {time}
      </h3>
      <button onClick={handleToggle}>
        {isRunning ? "一時停止" : "スタート"}
      </button>
      <button onClick={handleReset}>リセット</button>
    </>
  );
};
export default Timer;
