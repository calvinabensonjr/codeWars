function descendingOrder(n){
  let strNum = String(n),
  strNumArr = strNum.split(""),
  strNumArrSorted = strNumArr.sort(function(a,b){
    return a - b;
  });

  strNumArrSorted = strNumArrSorted.reverse();
  strNum = strNumArrSorted.join("");

  return parseInt(strNum);
}
