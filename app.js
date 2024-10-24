/* function factorial(x) {
  let answer = 1;
  for (let i = 1; i <= x; i++) {
    answer *= i;
  }
  return answer;
}

console.log(factorial(0.5));
 */
//Occupy Parking
/* function parking(n, a, b) {
  let number = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] == "C" && b[i] == "C") {
      number += 1;
    }
  }
  return number;
}

console.log(parking(5, "CCCC.", "C.CC.")); */

/* Psuedocode decimal to binary */

function decimal(n) {
  let n1 = String(n);
  let summ = 0;
  for (let i = 0; i < n1.length; i++) {
    if (n1[i] == 1) {
      summ += 2 ** (n1.length - 1 - i);
    }
  }
  return summ;
}

console.log(decimal(1010));

console.log(decimal(34234));
