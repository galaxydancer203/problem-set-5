/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
  let space = "&nbsp";
  let block = "#";
  let i
  let l
  let outputmario= "";
let going = false;
height = prompt ("Please enter a integer between 1 to 23 for the height value of a Mario-style half-pyramid. ");
  while (!going) {
    if  ( height > 0 && height <= 23){
      going = true
    }
    if ( height <= 0 || height > 23){
      height = prompt ("Not a acceptable integer you have chosen. Enter a integer between 1 to 23 for the height value of a Mario-style half-pyramid.");
    }
  }
      height = Number(height)
 for  (i= 0; i < height; i ++ ){
   for (l = 0 ; l < height+1 ; l ++){
    if (l > (height -i)-2){
      outputmario +=block;
    }else{
      outputmario += space;
      }
    }
    outputmario += "</br>";
  }


console.log(outputmario);



  var p = document.getElementById("mario-easy-output");
  p.innerHTML = "<code>" + outputmario + "</code>";




  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  let space = "&nbsp";
  let block = "#";
  let i
  let l
  let outputmario2= "";
  let going = false;
  height = prompt ("Please enter a integer between 1 to 23 for the height value of a Mario-style pyramid. ");
  while (!going) {
    if  ( height > 0 && height <= 23){
      going = true
    }
    if ( height <= 0 || height > 23){
      height = prompt ("Not a acceptable integer you have chosen. Enter a integer between 1 to 23 for the height value of a Mario-style half-pyramid.");
    }
  }
      height = Number(height)
  for  (i= 0; i < height; i ++ ){
   for (l = 0 ; l < height+1 ; l ++){
     if (l > (height -i)-2){
       outputmario2 +=block+block;
     }else{
       outputmario2 += space+space ;
       if (l > (height -i)-2){
         outputmario2 +=space + space
     }
     // outputmario2 += space+space;
  ;
     }
   }
   outputmario2 += "</br>";
  }


  console.log(outputmario2);



  var p = document.getElementById("mario-hard-output");
  p.innerHTML = "<code>" + outputmario2 + "</code>";



  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {
  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE

  let checkc = 0;
  let digit = 0;



  card = prompt ("Enter your credit card number to check.")
console.log(card.charAt(0));





  card = Number(card);
  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
  let guess = 0;
  let number= 0;
  let attempt = 0;


number = (Math.floor(Math.random()* 1000) + 1);
console.log(number);
guess = prompt ("Please enter your guess. The range is a random integer between 1 to 1,000.")
attempt += 1
while (guess != number){
  if (guess > 1000 || guess < 1 || guess%1 != 0)
  guess = prompt ("Invalid guess. Try a valid number between 1 to 1,000.")
if (guess < number) {
  guess = prompt ("Guess too small. Try another number between 1 to 1,000.")
  attempt += 1
}
if (guess > number) {
 guess = prompt ("Guess too big. Try another number between 1 to 1,000.")
 attempt += 1
}
}
if (guess == number) {
 var p = document.getElementById("guess-output");
 p.innerHTML = "You did it! The random integer was " + number + " and you took " + attempt + " tries or try (if you somehow got the random interger in your first guess) to figure out the random integer."
}
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

windspeed = prompt ("Please enter a windspeed in MPH for the hurricane that you want to test using the Saffir-Simpson scale in MPH. ");
windspeed = Number(windspeed)
while (windspeed < 0) {
  windspeed = prompt ("Please enter a windspeed in MPH for the hurricane that you want to test using the Saffir-Simpson scale in MPH. ");
}
if (windspeed >= 157){
  var p = document.getElementById("hurricane-output");
  p.innerHTML = "Category 5 Hurricane."; }
  if (windspeed >= 130 && windspeed <= 156){
    var p = document.getElementById("hurricane-output");
    p.innerHTML = "Category 4 Hurricane.";
}
if (windspeed >= 111 && windspeed <= 129){
  var p = document.getElementById("hurricane-output");
  p.innerHTML = "Category 3 Hurricane.";
}
if (windspeed >= 96 && windspeed <= 110){
  var p = document.getElementById("hurricane-output");
  p.innerHTML = "Category 2 Hurricane.";
}
if (windspeed >= 39 && windspeed <= 73){
  var p = document.getElementById("hurricane-output");
  p.innerHTML = "Tropical Storm.";
}
if (windspeed >= 0 && windspeed <= 38){
  var p = document.getElementById("hurricane-output");
  p.innerHTML = "The skies are calm...";
}


////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */
let s1
let s2
let s3
let s4
let s5
let s6
let discard = []
let out = 0
   s1 = prompt ("Please enter the first judge's score.");

   while (s1 < 0 || s1 > 10 ) {
     s1 = prompt ("Invalid number for the first score. Please enter a interger between 0 to 10 for the first score. ");
   }
   s1 = Number(s1);
   scores.push(s1);
  s2 = prompt ("Please enter the second judge's score.");
   while (s2 < 0 || s2 > 10 ) {
     s2 = prompt ("Invalid number for the second score. Please enter a interger between 0 to 10 for the second score. ");
   }
     s2 = Number(s2);
   scores.push(s2);

   s3 = prompt ("Please enter the third judge's score.");
     while (s3 < 0 || s3 > 10) {
       s3 = prompt ("Invalid number for the third score. Please enter a interger between 0 to 10 for the third score. ");
     }
         s3 = Number(s3);
     scores.push(s3);

 s4 = prompt ("Please enter the fourth judge's score.");
   while (s4 < 0 || s4 > 10 ) {
     s4 = prompt ("Invalid number for the fourth score. Please enter a interger between 0 to 10 for the fourth score. ");
   }
     s4 = Number(s4);
   scores.push(s4);

   s5 = prompt ("Please enter the fifth judge's score.");
    s5 = Number(s5);
     while (s5 < 0 || s5 > 10 ) {
       s5 = prompt ("Invalid number for the fifth score. Please enter a interger between 0 to 10 for the fifth score. ");
     }
         s5 = Number(s5);
     scores.push(s5);

     s6 = prompt ("Please enter the sixth judge's score.");

       while (s6 < 0 || s6 > 10) {
         s6 = prompt ("Invalid number for the sixth score. Please enter a interger between 0 to 10 for the sixth score. ");
       }
           s6 = Number(s6);
       scores.push(s6);

discard.push(Math.min(...scores));
discard.push(Math.max(...scores));
  out = discard[0] + discard[1]
let scoreFinal = (scores.reduce((a,b) => a + b, 0) - out)/(scores.length-2);

   var p = document.getElementById("gymnastics-output");
     p.innerHTML = "Discarded: " + discard[0] + ", " + discard[1]+ "</br>";
     p.innerHTML += "Score: " + scoreFinal.toFixed(2) ;

//ffff
  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {
//////////////////
  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */
   let testA= 0;
let userinput = 0;
let grade = 0;
let homeworkA =0;
let quizA = 0;
  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY
  let movingon = false;
while (!movingon) {
  userinput = prompt("Please enter a valid test score between 0 to 100. Enter -1 when done entering test scores.");
  if (userinput == -1) {
    movingon = true;

  } else {
    if (userinput >= 0 && userinput <= 100) {
    testTotal += userinput;
    tests += 1;
    } else {
       alert("Invalid test score entered! ");
       }
  }
}
let qmovingon = false;
while (!qmovingon) {
userinput = prompt("Please enter a valid quiz score between 0 to 100. Enter -1 when done entering quiz scores.");
if (userinput == -1) {
  qmovingon = true;
} else {
  if (userinput >= 0 && userinput <= 100) {
  quizTotal += userinput;
  quizzes += 1;
  } else {
     alert("Invalid quiz score entered! ");
     }
}
}
let hmovingon = false;
while (!hmovingon) {
userinput = prompt("Please enter a valid homework score between 0 to 100. Enter -1 when done entering homework scores.");
if (userinput == -1) {
  hmovingon = true;
} else {
  if (userinput >= 0 && userinput <= 100) {
  homeworkTotal += userinput;
  homeworks += 1;
  } else {
     alert("Invalid homework score entered! ");
     }
}
}

testA = (testTotal/tests);

quizA = (quizTotal/quizzes);

homeworkA = (homeworkTotal/homeworks);

grade = (testA*0.6)+((quizA * 0.3)+(homeworkA*0.1));
var p = document.getElementById("report-card-output");
  p.innerHTML = "Tests: " + testA.toFixed(2) +  "</br>";
  p.innerHTML += "Quizzes: " + quizA.toFixed(2) +  "</br>";
  p.innerHTML += "Homework: " + homeworkA.toFixed(2) +  "</br>";
  p.innerHTML += "Grade: " + grade.toFixed(2);
/*
while (prompt != -1){
  userinput= prompt("Please enter the first test score between 0 to 100. Enter -1 when done entering test scores.");

  if (testTotal >= 0  || testTotal <= 100){
    testTotal += prompt("Please enter the next test score between 0 to 100. Enter -1 when done entering test scores.");
    tests += 1;
  }
  if  (testTotal <= -2  || testTotal > 100 ){
      testTotal= prompt("Invalid test score. Please enter a valid test score between 0 to 100.");
  }

}
if (testTotal == -1){
  testTotal += 1;
  movingon += 1;
  console.log(22222222222222);
}
//uizTotal = prompt("asdaaddaadadadadaddaadadadadad Enter -1 when done entering test scores.");
*/
  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
