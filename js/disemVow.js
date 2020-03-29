function disemvowel(str){
  const regexPattern = /[aeiou]/gi;
  return str.replace(regexPattern, '');
}
