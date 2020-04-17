You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.






function getMiddle(str){
  let length = str.length;
  let middle = Math.floor(length/2);

  if (length % 2 === 0){
    return str[middle - 1] + str[middle]
  } else {
    return str[middle]
  }
}
