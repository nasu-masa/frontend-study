"use strict";

{
  let startTime;
  let remainingTime;
  let timeoutId;

  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  const display = document.getElementById("display");

  function setRunning() {
    start.classList.add("inactive");
    stop.classList.remove("inactive");
    reset.classList.add("inactive");
  }

  function setStopped() {
    start.classList.remove("inactive");
    stop.classList.add("inactive");
    reset.classList.remove("inactive");
  }

  function setInitial() {
    // ボタン状態
    start.classList.remove("inactive");
    stop.classList.add("inactive");
    reset.classList.add("inactive");

    // 保存されている残り時間があれば使う
    const saved = localStorage.getItem("remainingTime");

    if (saved !== null) {
      remainingTime = Number(saved);

      // 表示を saved の値に合わせる
      const totalSec = Math.floor(remainingTime / 1000);
      const m = String(Math.floor(totalSec / 60)).padStart(2, "0");
      const s = String(totalSec % 60).padStart(2, "0");
      display.textContent = `${m}:${s}`;
      setStopped();
    } else {
      // なければ ３分戻す
      remainingTime = 3 * 60 * 1000;
      display.textContent = "03:00";
    }
  }

  function countdown() {
    // 残り時間を計算
    const now = Date.now();
    const diff = remainingTime - (now - startTime);

    if (diff <= 0) {
      display.textContent = "03:00";
      clearTimeout(timeoutId);
      localStorage.removeItem("remainingTime");
      setInitial();
      return;
    }

    // 表示を更新する
    const totalSec = Math.floor(diff / 1000);
    const m = String(Math.floor(totalSec / 60)).padStart(2, "0");
    const s = String(totalSec % 60).padStart(2, "0");
    display.textContent = `${m}:${s}`;

    // setTimeout で繰り返す
    timeoutId = setTimeout(countdown, 100);
  }

  start.addEventListener("click", () => {
    // ボタン状態
    setRunning();
    // startTime を記録
    startTime = Date.now();
    // countDown() 開始
    countdown();
  });

  stop.addEventListener("click", () => {
    // タイマー停止
    clearTimeout(timeoutId);
    // 残り時間を保存
    remainingTime -= Date.now() - startTime;
    localStorage.setItem("remainingTime", remainingTime);
    // ボタン状態
    setStopped();
  });

  reset.addEventListener("click", () => {
    // タイマー停止
    clearTimeout(timeoutId);
    // 表示リセット
    localStorage.removeItem("remainingTime");
    // ボタン状態  + 残り時間を初期値に戻す
    setInitial();
  });

  // ▼ 最初の状態にする
  setInitial();
}
