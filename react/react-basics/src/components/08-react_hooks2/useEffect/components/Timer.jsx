import { useState, useEffect } from "react";

const Timer = ({ setIsDisp }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = null;
    intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h3>Time : {time}</h3>
    </>
  );
};
export default Timer;
