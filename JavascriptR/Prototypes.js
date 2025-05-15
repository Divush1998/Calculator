let a1 = [1, 2, 3, 4, 5];
let a2 = [5, 6, 7, 8, 9];
Array.prototype.sum = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};
console.log(a1.sum());
console.log(a2.sum());
