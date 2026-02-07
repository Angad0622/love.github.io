// Start button triggers quiz start
document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('intro').style.display = 'none';
  const questionnaire = document.getElementById('questionnaire');
  questionnaire.style.display = 'block';
  questionnaire.style.opacity = 1;
  showQuestion(1);
});

// Show questions based on number
function showQuestion(qNum) {
  const questionnaire = document.getElementById('questionnaire');
  let questionHTML = '';

  switch (qNum) {
    case 1:
      questionHTML = `
        <div class="question">
          <p>Do you love me? ❤️</p>
          <button class="answer-btn" onclick="answer(1, 'yes')">Yes 😊</button>
          <button class="answer-btn" onclick="answer(1, 'no')">No 😢</button>
        </div>
      `;
      break;

    case 2:
      questionHTML = `
        <div class="question">
          <p>Do I love you? 💕</p>
          <button class="answer-btn" onclick="answer(2, 'yes')">Yes 😊</button>
          <button class="answer-btn" onclick="answer(2, 'no')">No 😢</button>
        </div>
      `;
      break;

    case 3:
      questionHTML = `
        <div class="question">
          <p>Are we gonna date in April? 🌸</p>
          <button class="answer-btn" onclick="answer(3, 'yes')">Yes 😊</button>
          <button class="answer-btn" onclick="answer(3, 'no')">No 😢</button>
        </div>
      `;
      break;

    case 4:
      questionHTML = `
        <div class="question">
          <p>Will you ever leave me? 💔</p>
          <button class="answer-btn" onclick="answer(4, 'yes')">Yes 😞</button>
          <button class="answer-btn" onclick="answer(4, 'no')">No 😊</button>
        </div>
      `;
      break;

    case 5:
      questionHTML = `
        <div class="question">
          <p>Will you be my forever girl? 💍</p>
          <button class="answer-btn" onclick="answer(5, 'yes')">Yes 😊</button>
          <button class="answer-btn" onclick="answer(5, 'no')">No 😢</button>
        </div>
      `;
      break;

    case 6:
      questionHTML = `
        <div class="question">
          <p>Since you reached here, that means you have passed the test, now the final question… will you be my valentine? 💖</p>
          <button class="answer-btn" onclick="answer(6, 'yes')">Yes 🥰</button>
          <button class="answer-btn" onclick="answer(6, 'no')">No 😭</button>
        </div>
      `;
      break;

    default:
      questionHTML = `<p>Quiz ended!</p>`;
  }

  questionnaire.innerHTML = questionHTML;
}

// Handle answers & responses
function answer(qNum, response) {
  const finalAnswerDiv = document.getElementById('final-answer');
  const questionnaireDiv = document.getElementById('questionnaire');

  // Gifs for wrong answers by question number
  const wrongImages = {
    1: 'https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif',      // Cat with knife (cute threatening cat)
    2: 'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',     // Dog growling (cute dog with warning)
    3: 'https://media.giphy.com/media/13borq7Zo2kulO/giphy.gif',     // Cute bear waving
    4: 'https://media.giphy.com/media/3o7TKC79d7v9Q4rqX2/giphy.gif', // Cute boy animation with a toy gun
    5: 'https://media.giphy.com/media/26xBwdIuRJiAiGADu/giphy.gif'   // Sad puppy holding heart
  };

  // Wrong answers conditions
  const isWrongAnswer =
    (qNum === 1 && response === 'no') ||
    (qNum === 2 && response === 'no') ||
    (qNum === 3 && response === 'no') ||
    (qNum === 4 && response === 'yes') ||
    (qNum === 5 && response === 'no');

  const isQ6Wrong = (qNum === 6 && response === 'no');

  if (isWrongAnswer || isQ6Wrong) {
    questionnaireDiv.style.display = 'none';
    finalAnswerDiv.style.opacity = 1;

    // Show gif only for questions 1-5
    let imgHTML = '';
    if (isWrongAnswer) {
      imgHTML = `<img src="${wrongImages[qNum]}" alt="Wrong answer gif" />`;
    }

    finalAnswerDiv.innerHTML = `
      <div class="wrong">❌ WRONG ANSWER ❌</div>
      ${imgHTML}
      <div class="sad">😭😩🙏🏻</div>
      <button class="restart-btn" onclick="restartQuiz()">Return to Start 💗</button>
    `;

    return;
  }

  // All correct and last question answered yes
  if (qNum === 6 && response === 'yes') {
    questionnaireDiv.style.display = 'none';
    finalAnswerDiv.style.opacity = 1;
    finalAnswerDiv.innerHTML = `
      <h2>💖 I LOVE YOU SO MUCH 💖</h2>
      <p>One day I hope I can show it to you. Im so thankful you came into my life and showed me what love is, you care for me, you do so much for me, Im so lucky to have u. Khushi, I love you 💕❤️🫶🏻✨</p>
      <div style="font-size: 6rem; margin-top: 20px;">😍💞💘</div>
    `;
    return;
  }

  // Move to next question if not last
  if (qNum < 6) {
    showQuestion(qNum + 1);
  }
}

// Restart quiz function
function restartQuiz() {
  document.getElementById('final-answer').innerHTML = '';
  document.getElementById('final-answer').style.opacity = 0;
  document.getElementById('intro').style.display = 'block';
  document.getElementById('questionnaire').style.display = 'none';
}
