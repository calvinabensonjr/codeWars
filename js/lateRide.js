function lateRide(n) {
 let hour = Math.floor(n / 60);
  return (`${hour}${(n - hour * 60)}`).split('').reduce((a,b) => a + + (b),0)



}
