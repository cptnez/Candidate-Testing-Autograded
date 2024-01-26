const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? " ];
let correctAnswers =  ["Sally Ride", "true", "40", "Trajectory", "3" ];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name?: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswers[0] = input.question(questions[0]);
  candidateAnswers[1] = input.question(questions[1]);
  candidateAnswers[2] = input.question(questions[2]);
  candidateAnswers[3] = input.question(questions[3]);
  candidateAnswers[4] = input.question(questions[4]);
}

function gradeQuiz(candidateAnswers) {
let correctCandidateAnswers = [];
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log(`1. Your answer was ${candidateAnswers[0]}. The correct answer is ${correctAnswers[0]}.`)
if (candidateAnswers[0].toLowerCase() == correctAnswers[0].toLowerCase()) {
  console.log("Correct!");
  correctCandidateAnswers.push(1);
} else {
  console.log("Wrong!");
}
console.log(`2. Your answer was ${candidateAnswers[1]}. The correct answer is ${correctAnswers[1]}.`)
if (candidateAnswers[1].toLowerCase() == correctAnswers[1].toLowerCase()) {
  console.log("Correct!");
  correctCandidateAnswers.push(1);
} else {
  console.log("Wrong!");
}
console.log(`3. Your answer was ${candidateAnswers[2]}. The correct answer is ${correctAnswers[2]}.`)
if (candidateAnswers[2].toLowerCase() == correctAnswers[2].toLowerCase()) {
  console.log("Correct!");
  correctCandidateAnswers.push(1);
} else {
  console.log("Wrong!");
}
console.log(`4. Your answer was ${candidateAnswers[3]}. The correct answer is ${correctAnswers[3]}.`)
if (candidateAnswers[3].toLowerCase() == correctAnswers[3].toLowerCase()) {
  console.log("Correct!");
  correctCandidateAnswers.push(1);
} else {
  console.log("Wrong!");
}
console.log(`5. Your answer was ${candidateAnswers[4]}. The correct answer is ${correctAnswers[4]}.`)
if (candidateAnswers[4].toLowerCase() == correctAnswers[4].toLowerCase()) {
  console.log("Correct!");
  correctCandidateAnswers.push(1);
} else {
  console.log("Wrong!");
}
  let grade = '';
  grade = ((correctCandidateAnswers.length / questions.length) * 100);  //TODO 3.2 use this variable to calculate the candidates score.
  
  if (grade >= 80) {
    console.log(`Your score: ${grade}%. You passed the test!`)
  } else if (grade < 80) {
    console.log(`Your score: ${grade}%. You failed the test!`)
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Greetings " + candidateName + "! ");
  askQuestion();
  console.log("---")
  console.log(`Your answers were ${candidateAnswers}.`);
  console.log(`The correct answers are ${correctAnswers}.`)
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};