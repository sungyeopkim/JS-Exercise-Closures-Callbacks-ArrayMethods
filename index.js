// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 uses a function scope and counter2 uses a global scope
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 if the variable is used once, and counter2 otherwise
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  let home = Math.floor(Math.random() * 3);
  let away = Math.floor(Math.random() * 3);
  return [home, away];
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
let home = 0;
let away = 0;

function finalScore(cb1, innings){
  for (let i = 0; i < innings; i++) {
    let teams = cb1();
    home = home + teams[0];
    away = away + teams[1];
  }
  return `Final score - Away Team: ${away} - Home Team: ${home}`;
}

console.log(finalScore(inning, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(cb1, cb2, num1) {
  let allInnings = [];
  for (let i = 0; 1 < num1; i++) {
    allInnings.push(cb1(cb2, 1));
  }
  console.log(allInnings);

  for (let j = 0; j < num1; j++) {
    console.log(
      Inning #${j + 1}: Away Team: ${allInnings[j][1]} - Home Team: ${allInnings[j][0]});
  }

  let a = allInnings.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue[1];
  }, 0);
  let b = allInnings.reduce(function (accumulator, currentValue){
    return accumulator + currentValue[0];    
  }, 0);

  console.log(`Final Score - Away: ${a} - Home: ${b}`);
}


