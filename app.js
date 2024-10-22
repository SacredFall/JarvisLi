function factorial(x) {
  let answer = 1;
  for (let i = 1; i <= x; i++) {
    answer *= i;
  }
  return answer;
}

console.log(factorial(0.5));

//Occupy Parking
function parking(n, a, b) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if ((a[i] === b[i]) === "C") {
      sum += 1;
    }
  }
  return sum;
}

console.log(parking(5, "C.C..", "C.C.."));
