var getMinDistance = function(nums, target, start) {
  // Solution 1
  var min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      var absVal = Math.abs(i - start);
      if (min > absVal) {
        min = absVal;
      }
    }
  }
  return min;
  // Solution 2
  // return nums.reduce(
  //   (min, num, i) =>
  //     num === target ? Math.min(min, Math.abs(start - i)) : min,
  //   Infinity
  // );
};

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
console.log(getMinDistance([1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
