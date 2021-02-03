// 217. Contains Duplicate
const containsDuplicate = (nums) => {
   const n = nums.length
   const obj = {}

   for (let i = 0; i < n; i++) {
      if (obj[nums[i]] !== 1) {
         obj[nums[i]] = 1
      }
      else {
         return true
      }
   }
   return false

   /* 
   const n = nums.length
   const map = new Map()

   for (let i = 0; i < n; i++) {
      if (!map.has(nums[i])) {
         map.set(nums[i], 1)
      }
      else {
         return true
      }
   }
   return false
    */
}
//console.log(containsDuplicate([1, 2, 3, 1]))


// 1446. Consecutive Characters
const maxPower = (s) => {
   let back = 0
   let front = 1
   let max = 1
   let c = 1

   while(front < s.length) {
      if (s[back] == s[front]) {
         console.log(s[back] + " == " + s[front])
         front++
         c++
      }
      else {
         //console.log('asfasf')
         if (c > max) {
            max = c
         }
         c = 1
         back = front
         front++
      }
   }
   // sometimes the else part didnt run (eg: "aaa"),
   // so it didnt update max value yet. So, we simply
   // compare max & c before returning & return the 
   // largest value btween the 2.
   return Math.max(max, c)
}
//console.log(maxPower('ccaaa'))


// 896. Monotonic Array
const isMonotonic = (A) => {
   let ascend = false
   let descend = false

   for (let i = 0; i < A.length; i++) {
      if (A[i] === A[i+1]) {
         continue;
      }  
      else if (A[i] > A[i+1]) {
         descend = true
         //console.log('des' + i)
      }
      else if (A[i] < A[i+1]) {
         ascend = true
         //console.log('asc' + i)
      }
      if (ascend && descend) {
         return false
      }
   }
   return true
}
console.log(isMonotonic([2, 2, 2, 1, 4, 5]))
