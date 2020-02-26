//References:  Google; mdn, w3schools. Youtube.



function century(year) {
  return Math.floor(year / 100) + (year % 100 ? 1 : 0);
}
