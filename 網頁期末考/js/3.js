// 名言生成
const quotes = [
    "我好帥~~",
    "林群峰是小丑~~",
    "輸贏拉~",
    "我不想被當!!!",
    "我要當超級英雄！"
  ];
  
  document.getElementById('quote-btn').addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-display').textContent = randomQuote;
  });
  
  // 打擊小玩具遊戲
  let score = 0;
  const toy = document.getElementById('toy');
  const scoreDisplay = document.getElementById('score');
  
  toy.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `得分：${score}`;
  });
  