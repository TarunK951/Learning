//reverse a string

const reversedString = () => {
  const reverseInput = document.getElementById("input").value;
  return reverseInput.split("").reverse().join("");
};
const showReverse = () => {
  document.getElementById(
    "Result"
  ).textContent = `reversed: ${reversedString()}`;
  console.log("reversed string", reversedString());
};

//palindrome prob

const palindrome = () => {
  const palin = document.getElementById("input").value;
  const palinReverse = palin.split("").reverse().join("");
  return palin === palinReverse;
};

const palinResult = () => {
  document.getElementById("Result").textContent = `palindome : ${palindrome()}`;
  console.log(palindrome());
};

// minimum and max values in an array

const mathArray = () => {
  const arr = document.getElementById("input").value;
  console.log("math", arr);
  const maxValue = Math.max(...arr);
  const minVlaue = Math.min(...arr);
  console.log(maxValue);
  console.log(minVlaue);
  document.getElementById(
    "Result"
  ).textContent = `max value : ${maxValue} \ min value : ${minVlaue}`;
};

// count numbers.........

let displayCount = 0;

const add = () => {
  document.getElementById("displayCount").innerText = displayCount++;
};
const sub = () => {
  if (displayCount > 0) {
    displayCount--;
  } else {
    displayCount = 0;
  }
  document.getElementById("displayCount").innerText = displayCount;
};

// count Char

const countChar = () => {
  const str = document.getElementById("input").value;
  const count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  document.getElementById("Result").innerText = JSON.stringify(count, null, 2);
  console.log(count);
};

function count(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(count("helloo"));

// missing numbers

function findAllMissingNumbers(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const numSet = new Set(arr);
  const missing = [];

  for (let i = min; i <= max; i++) {
    if (!numSet.has(i)) {
      missing.push(i);
    }
  }

  return missing;
}

// Example usage:
console.log(findAllMissingNumbers([1, 2, 4, 6])); // Output: [3, 5]
console.log(findAllMissingNumbers([7, 8, 10, 12]));
