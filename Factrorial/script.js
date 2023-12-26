function res() {
  const x = document.getElementById("data").value;

  if (Number(x) < 0) {
    document.getElementById(
      "output"
    ).innerText = `value should be positive`;
  } else if (Number(x) === 0 || Number(x) === 1) {
    document.getElementById(
      "output"
    ).innerText = `the factorial of ${x} is 1`;
  } else {
    let fact = 1;
    for (i = 1; i <= x; i++) {
      fact = fact * i;
    }
    document.getElementById(
      "output"
    ).innerText = `the facrorial of ${x} is ${fact}`;
  }
}
