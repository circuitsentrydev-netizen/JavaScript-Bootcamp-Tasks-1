loops.js
for (let i = 1; i <= 10; i++) {
      console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
      console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
      sum += i;
}
console.log(sum);

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
}

const nums = [3, 7, 2, 5, 10, 6];
let largest = nums[0];
for (let i = 1; i < nums.length; i++) {
      if (nums[i] > largest) {
            largest = nums[i];
      }
}
console.log(largest);
      
