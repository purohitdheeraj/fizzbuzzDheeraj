const fizzBuzz = (phoneNumber) => {
  let n = phoneNumber.split("").reduce((acc, curr) => Number(curr) + acc, 0);

  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 4 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result.join(" ");
};

console.log(fizzBuzz("7021124025"));
