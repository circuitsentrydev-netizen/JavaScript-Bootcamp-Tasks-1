doWhile_loops.js
let num = 1;
do {
      console.log(num);
        num++;
} while (num <= 10);

let sum = 0;
let start = 1;
do {
      sum += start;
        start++;
} while (start <= 100);
console.log(sum);

let answer;
do {
      answer = parseInt(prompt("Enter a number greater than 10:"));
} while (answer <= 10);

let secret = 7;
let guess;
do {
      guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== secret);
console.log("Correct!");
}
}
}
}