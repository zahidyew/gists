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
//console.log(isMonotonic([2, 2, 2, 1, 4, 5]))


// 383. Ransom Note
var canConstruct = function (ransomNote, magazine) {
   let rn = {}
   let mag = {}
   let flag = true
   //ransomNote = ransomNote.trim()
   //magazine = magazine.trim()

   for (let i = 0; i < ransomNote.length; i++) {
      if (rn[ransomNote[i]] > 0) {
         rn[ransomNote[i]]++
      }
      else {
         rn[ransomNote[i]] = 1
      }
   }

   magazine.split("").map(letter => {
      if (mag[letter] > 0) {
         mag[letter]++
      }
      else {
         mag[letter] = 1
      }
   })

   for (let [key] in rn) {
      if (rn[key] <= mag[key]) {
         flag = true
      }
      else {
         return false
      }
   }
   return flag
};
//console.log(canConstruct("", ""))


// 575. Distribute Candies
var distributeCandies = function (candyType) {
   /* const n = candyType.length / 2
   const set = new Set(candyType)
   const type = set.size
   //console.log(set)

   if (type >= n) {
      return n
   }
   else {
      return type
   } */

   const n = candyType.length / 2
   const type = new Set(candyType).size

   return type >= n ? n : type
};
//console.log(distributeCandies([1, 1, 2, 2, 3, 3]))


// 1629. Slowest Key
var slowestKey = function (releaseTimes, keysPressed) {
   /* let duration = [releaseTimes[0]]
   let max = releaseTimes[0]
   let index = [0]

   for (let i = 1; i < releaseTimes.length; i++) {
      let d = releaseTimes[i] - releaseTimes[i-1]
      duration.push(d)

      if (d > max) {
         max = d
         index = [] // clear array
         index[0] = i
      }
      else if (d === max) {
         index.push(i)
      }
   }

   // if there are multiple letters with max time, return the lexicographically largest key
   if (index.length > 1) {
      let ans = keysPressed[index[0]]

      for (let i = 1; i < index.length; i++) {
         if (keysPressed[index[i]] > keysPressed[index[i-1]]) {
            ans = keysPressed[index[i]]
         }
      }
      return ans 
   }

   return keysPressed[index[0]] */

   let max = releaseTimes[0]
   let ans = keysPressed[0]

   for (let i = 1; i < releaseTimes.length; i++) {
      let d = releaseTimes[i] - releaseTimes[i - 1]

      if (d > max) {
         max = d
         ans = keysPressed[i]
      }
      // if same time, we want the lexicographically larger key
      else if (d === max && keysPressed[i] > ans) {
         ans = keysPressed[i]
      }
   }

   return ans
};
//console.log(slowestKey([3, 6, 8, 10, 16, 17, 26, 41, 72, 88], "uzhnanabvy"))


// 7. Reverse Integer 
var reverse = function (x) {
   let ans
   if (x < 0) {
      x = x.toString()
      ans = "-" + rev(x, 0)
   }
   else {
      x = x.toString()
      ans = rev(x, -1)
   }
   ans = parseInt(ans)
   if (ans > 2147483647 || ans < -2147483648) {
      return 0
   }
   else {
      return ans
   }
};

function rev (x, end) {
   let r = ""

   for (let i = x.length - 1; i > end; i--) {
      r = r + x[i]
   }
   console.log(r)
   return r
}
//console.log(reverse(2147483647))


var isPalindrome = function (x) {
   /* if (x < 0) {
      return false
   }

   let rev = x.toString().split("").reverse().join("")

   //console.log(rev)
   return rev == x ? true : false */

   if (x < 0 || x % 10 === 0 && x !== 0) {
      return false
   }

   let rev = 0
   while (x > rev) {
      rev = rev * 10 + x % 10
      x = x / 10
      console.log(rev)
   }

   return x === rev || x === rev/10
};
//console.log(isPalindrome(121))


// 13. Roman to Integer
var romanToInt = function (s) {
   let ans = 0;
   const eCases = s.match(/(?:IV|IX|XL|XC|CD|CM)/g)
   const romans = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
      "IV": 4,
      "IX": 9,
      "XL": 40,
      "XC": 90,
      "CD": 400,
      "CM": 900,
   }

   // deal with edge cases in eCases
   if (eCases !== null) {
      for (let i = 0; i < eCases.length; i++) {
         // add up all the captured edge cases & remove it from the string
         ans = ans + romans[eCases[i]]
         s = s.replace(eCases[i], "")

         //console.log(ans)
         //console.log(s)
      }
   }

   // add up the all the simple romans
   s.split("").map(r => {
      ans = ans + romans[r]
   })

   return ans
};
//console.log(romanToInt('MMXIX'))


// 14. Longest Common Prefix
var longestCommonPrefix = function (strs) {
   if (strs.length === 0) {
      return ""
   }

   let ans = strs[0]

   for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(ans) !== 0) {
         ans = ans.substring(0, ans.length - 1)
         if (ans.length === 0) {
            return ""
         }
      }
   }
   return ans
};
//console.log(longestCommonPrefix(["flower", "flow", "flight"]))


// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
   /* const n = nums.length
   const min = nums[0]
   const max = nums[n - 1]
   const l = max - min + 1

   for (let i = 1; i <= l; i++) {
      nums[i] = nums[i - 1] + 1
   }

   console.log(nums)
   return l */

   if (nums.length < 2) {
      return nums.length
   }

   let i = 0

   for (let x = 1; x < nums.length; x++) {
      if (nums[i] !== nums[x]) {
         i++
         nums[i] = nums[x]
      }
   }
   return i + 1
};
//console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))


// 27. Remove Element
var removeElement = function (nums, val) {
   while (nums.indexOf(val) !== -1) {
      nums.splice(nums.indexOf(val), 1)
   }
   //return nums.length
   return nums
};
console.log(removeElement([3, 2, 2, 3], 3))