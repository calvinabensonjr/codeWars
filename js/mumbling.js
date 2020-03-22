function accum(str) {
  let newStrArr = [];

  for (let i = 0; i < str.length; i++){
    newStrArr.push(format(str[i], i + 1));
  }

  return newStrArr.join("-");
}

function format(str, num){
  let letter = str.toUpperCase();

  while (letter.length !== num){
    letter += str.toLowerCase();
  }
  return letter;
}
