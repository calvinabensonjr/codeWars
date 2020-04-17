Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T' on the interests that were just gained (and only on the interests part).







function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired){
    let gains = principal * interest - (principal * interest * tax);
    principal += gains;
    years++;
  }

  return years;
}
