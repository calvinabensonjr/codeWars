function seven(m) {
  let i = 0;
  while(m > 99) {
    m = parseInt(m / 10) - (2 * (m % 10));
    i++;
  }
  return [m, i];

}
