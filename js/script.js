// 遊戲變數
let score = 0;
let timeLeft = 10;
let shinchan = document.getElementById('shinchan');
let scoreDisplay = document.getElementById('score');
let timeDisplay = document.getElementById('time');

// 隨機移動小新
function moveShinchan() {
  const x = Math.random() * 500; // 最大範圍是容器寬度 - 小新寬度
  const y = Math.random() * 300; // 最大範圍是容器高度 - 小新高度
  shinchan.style.left = `${x}px`;
  shinchan.style.top = `${y}px`;
  shinchan.style.display = 'block';
}

// 點擊小新加分
shinchan.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  shinchan.style.display = 'none'; // 點擊後隱藏小新
});

// 倒計時
function startCountdown() {
  const countdown = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      endGame();
    }
  }, 1000);
}

// 遊戲結束
function endGame() {
  shinchan.style.display = 'none';
  alert(`時間到！你的最終得分是：${score}`);
}

// 開始遊戲
function startGame() {
  moveShinchan();
  startCountdown();

  // 每 1 秒讓小新隨機出現
  const gameInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
    } else {
      moveShinchan();
    }
  }, 700);
}

// 啟動遊戲
startGame();
