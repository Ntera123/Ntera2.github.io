const questions = [
  // Trigonometry questions
  { question: 'What is sin(30°)? (Enter the answer rounded to 2 decimal places)', answer: '0.5' },
  // Add more Trigonometry questions here...

  // Algebra questions
  { question: 'What is the value of x in the equation 2x + 5 = 15?', answer: '5' },
  { question: 'What is the result of 3x - 7 = 20 when x = 9?', answer: '26' },
  { question: 'What is the solution to the equation 3x + 4 = 10?', answer: '2' },
  { question: 'What is the value of y in the equation 2y - 6 = 10?', answer: '8' },
  { question: 'What is the result of 4(x - 3) = 24 when x = 9?', answer: '24' },
  // Add more Algebra questions here...

  // Straight line graphs
  { question: 'What is the slope of the line passing through the points (2, 3) and (4, 7)?', answer: '2' },
   { question: 'What is the equation of the line passing through the points (3, 5) and (6, 11)?', answer: 'y = 2x - 1' },
  { question: 'What is the slope of the line with equation y = 4x + 2?', answer: '4' },
  { question: 'What is the equation of the line with slope 3 passing through the point (1, 4)?', answer: 'y = 3x + 1' },
  { question: 'What is the slope of the line perpendicular to y = 2x - 3?', answer: '-1/2' },
  // Add more Straight line graphs questions here...

  // Multiplication, division, fractions, and percentage questions
  { question: 'What is 3/4 expressed as a percentage?', answer: '75' },
   { question: 'What is 2.5 * 4?', answer: '10' },
  { question: 'What is 1/3 + 2/3?', answer: '1' },
  { question: 'What is 5/8 - 1/4?', answer: '3/8' },
  { question: 'What is 15% of 200?', answer: '30' },
  // Add more Multiplication, division, fractions, and percentage questions here...
];

let currentIndex = 0;
let correctAnswers = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const percentageElement = document.getElementById('percentage');

function showQuestion() {
  questionElement.textContent = questions[currentIndex].question;
}

function checkAnswer() {
  if (answerElement.value.trim().toLowerCase() === questions[currentIndex].answer.toLowerCase()) {
    correctAnswers++;
    questionElement.classList.add('correct-answer');
  }
  else {
    questionElement.classList.remove('correct-answer');
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }

  answerElement.value = '';
}

function showResult() {
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  percentageElement.textContent = percentage + '%';
}

document.getElementById('submit-btn').addEventListener('click', checkAnswer);

showQuestion();
