function removeSmallest(numbers) {
  let low = {
    'num': Infinity,
    'idx': 0};
    for (let i = 0; i < numbers.length; i++){
      if(numbers[i]< low['num']){
        low['num'] = numbers[i];
        low['idx'] = i;
      }
    }

    return numbers.slice(0, low['idx']).concat(numbers.slice(low['idx'] + 1))
  }
