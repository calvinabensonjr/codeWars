Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

function XO(str) {
  let equal = 0;
  str.split('').forEach(c =>{
    if ('x' == c.toLowerCase()) {
      equal += 1;
    }
    if ('o' === c.toLowerCase()) {
      equal -= 1;
    }
  });
  return equal === 0;
}
