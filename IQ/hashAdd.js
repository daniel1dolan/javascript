function twoSumHash(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (hash[target - num] !== undefined) {
      var result = [hash[target - num], i];
    } else {
      hash[num] = i;
    }
  }
  return result;
}
