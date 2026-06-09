"use strict";
{
  const timer = document.getElementById("timer");
  const btn = document.getElementById("btn");
  const pauseBtn = document.getElementById("pauseBtn");
  const resetBtn = document.getElementById("resetBtn");

  let endTime;
  let timeoutId;
  let minutesTimer = 180 * 1000;
  let remainingTime = 0; // 一時停止用
  let isPaused = false; // 状態管理

  pauseBtn.disabled = true;

  function check() {
    // 残り時間 = 終了時刻 - 現在時刻
    let countdown = endTime - new Date().getTime();

    // (3) タイマーの終了
    if (countdown < 0) {
      clearTimeout(timeoutId);
      countdown = minutesTimer;
      btn.disabled = false;
      pauseBtn.disabled = true;
      btn.classList.remove("inactive");
      pauseBtn.classList.add("inactive");
    }

    remainingTime = countdown;
    // 毎回更新することで一時停止しても再開時にremainingTimeを使い途中から秒数を数えられる

    const totalSeconds = Math.floor(countdown / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const minutesFormatted = String(minutes).padStart(2, "0");
    const secondsFormatted = String(seconds).padStart(2, "0");

    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;

    timeoutId = setTimeout(check, 100);
  }

  // (1) 終了時刻を求める
  btn.addEventListener("click", () => {
    endTime = new Date().getTime() + minutesTimer;

    btn.disabled = true;
    pauseBtn.disabled = false;
    btn.classList.add("inactive");
    pauseBtn.classList.remove("inactive");

    // (2) 残り時間を求める
    timeoutId = setTimeout(check, 100);
  });

  pauseBtn.addEventListener("click", () => {
    if (!isPaused) {
      isPaused = true;
      clearTimeout(timeoutId);
      pauseBtn.textContent = "再開";
    } else {
      isPaused = false;
      endTime = new Date().getTime() + remainingTime; //残り時間から再計算
      pauseBtn.textContent = "一時停止";
      timeoutId = setTimeout(check, 100);
    }
  });

  resetBtn.addEventListener("click", () => {
    clearTimeout(timeoutId);

    isPaused = false;
    remainingTime = 0;

    timer.textContent = "03:00";

    btn.disabled = false;
    btn.classList.remove("inactive");

    pauseBtn.disabled = true;
    pauseBtn.textContent = "一時停止";
    pauseBtn.classList.add("inactive");
  });
}
