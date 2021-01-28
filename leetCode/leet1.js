/* var twoSum = function (nums, target) {
   const len = nums.length

   for (let i = 0; i < len; i++) {
      let x = target - nums[i]
      //console.log(i)

      if (nums.lastIndexOf(x) !== -1 && nums.lastIndexOf(x) !== i) {
         return [i, nums.lastIndexOf(x)]
      }
   }
   return 0
};

console.log(twoSum([2, 7, 11, 15], 9)) */
// [2,7,11,15], 9
// [3,3], 6
// [3, 2, 4], 6


var twoSum = function (nums, target) {
   const len = nums.length
   let arry = []

   for (let i = 0; i < len; i++) {
      if (arry[nums[i]] >= 0) {
         return [arry[nums[i]], i]
      }
      let x = target - nums[i]
      arry[x] = i
   }
   return 0
};

//console.log(twoSum([3, 2, 4], 6))


var shuffle = function (nums, n) {
   let arry = []

   for (let i = 0; i < n; i++) {
      arry.push(nums[i])
      arry.push(nums[i + n])
   }

   return arry
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3))