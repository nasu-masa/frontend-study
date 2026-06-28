import { useCountdown } from "./useCountdown";

export default function Timer() {
  const { time, start, stop, reset } = useCountdown();

  return (
    <div>
      <h2>残り時間: {time}</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
