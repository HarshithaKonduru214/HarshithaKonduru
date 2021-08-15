var readLineSync = require('readline-sync');

var score = 0
var userName = readLineSync.question('Please Enter Your Name? ')

console.log('Welcome ' + userName + ' to DO YOU KNOW HARSHITHA!' );

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer) {
    console.log('Right Answer!')
    score += 1;
  } else {
    console.log('Wrong Answer!');
    score -= 1;
  }

  console.log(score);
  console.log('---------------');
}

var highScores = [{
  name: 'Harshitha',
  score: 10},
  {name: 'Monica',
  score: 9}
]

var questions = [{
  question: `My Birth Place
  A: Banaglore
  B: Thirupati
  C: Chittoor `,
  answer: 'B'},
  {question: `My Date Of Birth
  A: 17 May 1999
  B: 15 April 1999
  C: 21 April 1999 `,
  answer: 'C'},
  {question: `My Favourite Color
  A: Black
  B: Blue
  C: Yellow `,
  answer: 'C'},
  {question: `My Favourite TV Show
  A: Vampire Diaries
  B: Money Heist
  C: Walking Dead `,
  answer: 'A'},
  {question: `My Favourite Food
  A: Pasta
  B: Pizza
  C: Biryani `,
  answer: 'C'},
  {question: `My School Name
  A: Sindhi High School
  B: Delhi Public School
  C: Bishop Cottons `,
  answer: 'A'},
  {question: `My Favourite Subject
  A: Mathematics
  B: Social Studies
  C: Science `,
  answer: 'A'},
  {question: `I am Currently working in 
  A: PwC AC
  B: SAP Labs
  C: Target `,
  answer: 'B'},
  {question: `I was a 
  A: Athlete
  B: Volley Ball Player
  C: Throw Ball player `,
  answer: 'A'},
  {question: `My Favourite Hobby
  A: Reading
  B: Cooking
  C: Gardening `,
  answer: 'B'
}]

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer);
}
console.log('The Winners are: ');
for(var i=0; i<highScores.length;i++) {
  var currentScore = highScores[i];
  if(score < currentScore.score) {
    console.log(currentScore.name);
  }else {
    console.log(userName);
    console.log('Congrats on Winning!');
  }
}