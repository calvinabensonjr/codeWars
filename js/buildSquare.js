function generateShape(int){
  let arr = [];
  for (let i = 0; i < int; i++) {
    arr.push('+'.repeat(int));
  }
  return arr.join('\n');
}
