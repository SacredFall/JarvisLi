function factorial(x) {
  let answer = 1;
  for (let i = 1; i <= x; i++) {
    answer *= i;
  }
  return answer;
}

console.log(factorial(0.5));
