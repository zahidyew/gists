// 217. Contains Duplicate
const containsDuplicate = (nums) => {
   const n = nums.length;
   const obj = {};

   for (let i = 0; i < n; i++) {
      if (obj[nums[i]] !== 1) {
         obj[nums[i]] = 1;
      }
      else {
         return true;
      }
   }
   return false;

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
};
//console.log(containsDuplicate([1, 2, 3, 1]))


// 1446. Consecutive Characters
const maxPower = (s) => {
   let back = 0;
   let front = 1;
   let max = 1;
   let c = 1;

   while (front < s.length) {
      if (s[back] == s[front]) {
         console.log(s[back] + " == " + s[front]);
         front++;
         c++;
      }
      else {
         //console.log('asfasf')
         if (c > max) {
            max = c;
         }
         c = 1;
         back = front;
         front++;
      }
   }
   // sometimes the else part didnt run (eg: "aaa"),
   // so it didnt update max value yet. So, we simply
   // compare max & c before returning & return the 
   // largest value btween the 2.
   return Math.max(max, c);
};
//console.log(maxPower('ccaaa'))


// 896. Monotonic Array
const isMonotonic = (A) => {
   let ascend = false;
   let descend = false;

   for (let i = 0; i < A.length; i++) {
      if (A[i] === A[i + 1]) {
         continue;
      }
      else if (A[i] > A[i + 1]) {
         descend = true;
         //console.log('des' + i)
      }
      else if (A[i] < A[i + 1]) {
         ascend = true;
         //console.log('asc' + i)
      }
      if (ascend && descend) {
         return false;
      }
   }
   return true;
};
//console.log(isMonotonic([2, 2, 2, 1, 4, 5]))


// 383. Ransom Note
var canConstruct = function (ransomNote, magazine) {
   let rn = {};
   let mag = {};
   let flag = true;
   //ransomNote = ransomNote.trim()
   //magazine = magazine.trim()

   for (let i = 0; i < ransomNote.length; i++) {
      if (rn[ransomNote[i]] > 0) {
         rn[ransomNote[i]]++;
      }
      else {
         rn[ransomNote[i]] = 1;
      }
   }

   magazine.split("").map(letter => {
      if (mag[letter] > 0) {
         mag[letter]++;
      }
      else {
         mag[letter] = 1;
      }
   });

   for (let [key] in rn) {
      if (rn[key] <= mag[key]) {
         flag = true;
      }
      else {
         return false;
      }
   }
   return flag;
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

   const n = candyType.length / 2;
   const type = new Set(candyType).size;

   return type >= n ? n : type;
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

   let max = releaseTimes[0];
   let ans = keysPressed[0];

   for (let i = 1; i < releaseTimes.length; i++) {
      let d = releaseTimes[i] - releaseTimes[i - 1];

      if (d > max) {
         max = d;
         ans = keysPressed[i];
      }
      // if same time, we want the lexicographically larger key
      else if (d === max && keysPressed[i] > ans) {
         ans = keysPressed[i];
      }
   }

   return ans;
};
//console.log(slowestKey([3, 6, 8, 10, 16, 17, 26, 41, 72, 88], "uzhnanabvy"))


// 7. Reverse Integer 
var reverse = function (x) {
   let ans;
   if (x < 0) {
      x = x.toString();
      ans = "-" + rev(x, 0);
   }
   else {
      x = x.toString();
      ans = rev(x, -1);
   }
   ans = parseInt(ans);
   if (ans > 2147483647 || ans < -2147483648) {
      return 0;
   }
   else {
      return ans;
   }
};

function rev(x, end) {
   let r = "";

   for (let i = x.length - 1; i > end; i--) {
      r = r + x[i];
   }
   console.log(r);
   return r;
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
      return false;
   }

   let rev = 0;
   while (x > rev) {
      rev = rev * 10 + x % 10;
      x = x / 10;
      console.log(rev);
   }

   return x === rev || x === rev / 10;
};
//console.log(isPalindrome(121))


// 13. Roman to Integer
var romanToInt = function (s) {
   let ans = 0;
   const eCases = s.match(/(?:IV|IX|XL|XC|CD|CM)/g);
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
   };

   // deal with edge cases in eCases
   if (eCases !== null) {
      for (let i = 0; i < eCases.length; i++) {
         // add up all the captured edge cases & remove it from the string
         ans = ans + romans[eCases[i]];
         s = s.replace(eCases[i], "");

         //console.log(ans)
         //console.log(s)
      }
   }

   // add up the all the simple romans
   s.split("").map(r => {
      ans = ans + romans[r];
   });

   return ans;
};
//console.log(romanToInt('MMXIX'))


// 14. Longest Common Prefix
var longestCommonPrefix = function (strs) {
   if (strs.length === 0) {
      return "";
   }

   let ans = strs[0];

   for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(ans) !== 0) {
         ans = ans.substring(0, ans.length - 1);
         if (ans.length === 0) {
            return "";
         }
      }
   }
   return ans;
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
      return nums.length;
   }

   let i = 0;

   for (let x = 1; x < nums.length; x++) {
      if (nums[i] !== nums[x]) {
         i++;
         nums[i] = nums[x];
      }
   }
   return i + 1;
};
//console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))


// 27. Remove Element
var removeElement = function (nums, val) {
   while (nums.indexOf(val) !== -1) {
      nums.splice(nums.indexOf(val), 1);
   }
   //return nums.length
   return nums;
};
//console.log(removeElement([3, 2, 2, 3], 3))


// 35. Search Insert Position
var searchInsert = function (nums, target) {
   // if target is inside the array, return its position immediately
   if (nums.indexOf(target) !== -1) {
      return nums.indexOf(target);
   }
   // else find where it should be inserted
   else {
      const max = Math.max(...nums);
      const min = Math.min(...nums);

      if (target > max) {
         // insert at the end
         return nums.length;
      }
      else if (target < min) {
         // insert at the beginning
         return 0;
      }

      // target belong somewhere in the middle
      for (let i = 1; i < nums.length; i++) {
         if (nums[i - 1] < target && nums[i] > target) {
            return i;
         }
      }
   }

   /* for (let i = 0; i < nums.length; i++) {

      if (nums[i] === target || nums[i] > target) return i;

      if (i === (nums.length - 1) && target > nums[i]) return i + 1;
   } */

};
//console.log(searchInsert([1, 3, 5, 6], 2))


// 278. First Bad Version
var solution = function (isBadVersion) {
   return function (n) {
      let left = 1;
      let right = n;

      // binary search 
      while (left < right) {
         let mid = Math.floor(left + (right - left) / 2);

         if (isBadVersion(mid)) {
            right = mid;
         } else {
            left = mid + 1;
         }
         /* console.log("mid " + mid)
         console.log("n " + n)
         console.log("right " + right)
         console.log("left " + left + "\n") */
      }
      return left;
   };
};
function isBadVersion(n) {
   const badVersion = 2;
   if (n >= badVersion) {
      return true;
   } else {
      return false;
   }
}
//console.log(solution(isBadVersion)(10))


// 1480. Running Sum of 1d Array
var runningSum = function (nums) {
   let sum = [nums[0]];

   if (nums.length > 1) {
      for (let i = 1; i < nums.length; i++) {
         sum[i] = sum[i - 1] + nums[i];
      }
   }
   return sum;
};
//console.log(runningSum([3, 1, 2, 10, 1]))


// 1672. Richest Customer Wealth
var maximumWealth = function (accounts) {
   let max = 0;

   for (let i = 0; i < accounts.length; i++) {
      let wealth = accounts[i].reduce((a, b) => a + b);

      if (wealth > max) {
         max = wealth;
      }
   }
   return max;

   //return Math.max(...accounts.map(customer => customer.reduce((a, b) => a + b)))
};


// 771. Jewels and Stones
var numJewelsInStones = function (jewels, stones) {
   /* let ans = 0

   ans = jewels.split("").map(jewel => {
      const myRegex = new RegExp(jewel, "g")
      return stones.match(myRegex)
   })

   console.log(ans)

   if (ans.length > 0) {
      let len = 0
      for (let i in ans) {
         len = len + ans[i].length
      }
      return len
   } else {
      return 0
   } */

   //let ans = []
   let n = 0;

   for (let i in jewels) {
      const myRegex = new RegExp(jewels[i], "g");
      const matched = stones.match(myRegex);
      if (matched !== null) {
         //ans.push(matched)
         n = n + matched.length;
      }
   }

   return n;

   /* let n = 0
   for (let i = 0; i < stones.length; i++) {
      if (jewels.indexOf(stones[i]) !== -1) {
         n++
      }
   }
   return n */
};
//console.log(numJewelsInStones("aA", "aAAbbb"))


// 1342. Number of Steps to Reduce a Number to Zero
var numberOfSteps = function (num) {
   let count = 0;

   while (num > 0) {
      if (num % 2 === 0) {
         num = num / 2;
      } else {
         num = num - 1;
      }
      count++;
   }
   return count;
};
//console.log(numberOfSteps(14))


// 1313. Decompress Run-Length Encoded List
var decompressRLElist = function (nums) {
   let ans = [];

   for (let i = 0; i < nums.length; i += 2) {
      const freq = nums[i];
      const val = nums[i + 1];
      ans.push(...new Array(freq).fill(val));

      //for (let j = 0; j < freq; j++) {
      //ans.push(val)
      //}
   }
   return ans;
};


// 242. Valid Anagram
var isAnagram = function (s, t) {
   let lettersInS = {};
   let lettersInT = {};

   s.toLowerCase().split("").map(l => {
      if (lettersInS[l] > 0) {
         lettersInS[l]++;
      } else {
         lettersInS[l] = 1;
      }
      //console.log(lettersInS[l])
   });

   t.toLowerCase().split("").map(l => {
      if (lettersInT[l] > 0) {
         lettersInT[l]++;
      } else {
         lettersInT[l] = 1;
      }
   });

   console.log(lettersInS);
   console.log(lettersInT);

   if (Object.keys(lettersInS).length !== Object.keys(lettersInT).length) {
      return false;
   }

   for (let i in lettersInS) {
      if (lettersInS[i] !== lettersInT[i]) {
         return false;
      }
   }
   return true;
};
//console.log(isAnagram("evil", "vile"))


// 53. Maximum Subarray (Can be solved using Kadane's Algorithm)
var maxSubArray = function (nums) {
   let sum = 0;
   let max = Number.MIN_SAFE_INTEGER;

   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > sum + nums[i]) {
         sum = nums[i];
      } else {
         sum = sum + nums[i];
      }
      if (sum > max) {
         max = sum;
      }
   }

   return max;
};


// 58. Length of Last Word
var lengthOfLastWord = function (s) {
   /* s = s.trim()
   const lastSpaceIndex = s.lastIndexOf(" ")
   return s.length - lastSpaceIndex - 1 */

   s = s.trim();
   return s.length - s.lastIndexOf(" ") - 1;
};


// 66. Plus One: Long, complicated & ugly solution using recursion
/* var plusOne = function (digits) {
   const n = digits.length

   if (digits[n - 1] + 1 < 10) {
      digits[n - 1] = digits[n - 1] + 1
   }
   else {
      digits = adding(digits, n - 1)
   }
   return digits
};
function adding(digits, index) {
   if (index > -1) {
      if (digits[index] + 1 > 9) {
         //digits[n - 1] = 0

         if (digits.length === 1 || index === 0) {
            digits[index] = 0
            digits.unshift(1)
            return digits
         } else {
            digits[index] = 0
            return adding(digits, index - 1)
         }
      } else {
         digits[index] = digits[index] + 1
         return digits
      }
   } else {
      return digits
   }
} */
// 66. Plus One: Better & more concise solution
var plusOne = function (digits) {
   for (let i = digits.length - 1; i > -1; i--) {
      digits[i]++;
      if (digits[i] > 9) {
         // need to add 1 to the next number, continue looping 
         digits[i] = 0;
      }
      else {
         // stop looping & return digits immediately
         return digits;
      }
   }
   // if reach here, then need to add 1 to the beginning of the array
   // eg, [9,9,9] plus one becomes [1,0,0,0]
   digits.unshift(1);
   return digits;
};


// 67. Add Binary
var addBinary = function (a, b) {
   let addOne = 0;
   let ans = "";
   let i = a.length - 1;
   let j = b.length - 1;

   while (i > -1 || j > -1 || addOne !== 0) {
      let sum = 0;
      if (a[i] === undefined && b[j] === undefined) {
         sum = addOne;
      } else if (a[i] === undefined) {
         sum = parseInt(b[j]) + addOne;
      } else if (b[j] === undefined) {
         sum = parseInt(a[i]) + addOne;
      } else {
         sum = parseInt(a[i]) + parseInt(b[j]) + addOne;
      }

      if (sum > 1) {
         ans = (sum - 2) + ans; // concatenate string
         addOne = 1;
      } else {
         ans = sum + ans;
         addOne = 0;
      }
      //console.log(ans)
      //console.log(sum)
      i--;
      j--;
   }
   return ans;

   /*
   a = `0b${a}`;
   b = `0b${b}`;

   let sum = BigInt(a) + BigInt(b);
   console.log(sum)

   return sum.toString(2); // convert to binary\
   */
};
//console.log(addBinary("1010", "1011"))


// 1304. Find N Unique Integers Sum up to Zero
var sumZero = function (n) {
   let ans = [];

   if (n === 1) {
      ans.push(0);
      return ans;
   }

   if (n % 2 === 0) {
      ans = fillSumZero(n, true);
   } else {
      ans = fillSumZero(n, false);
   }
   return ans;
};
function fillSumZero(n, isEven) {
   let ans = [];
   let num = 1;
   let start = 0;

   if (!isEven) {
      start = 1;
      ans.push(0);
   }
   for (let i = start; i < n; i++) {
      ans.push(num);
      if (num > 0) {
         num = num * -1;
      } else {
         num = num * -1;
         num++;
      }
   }
   return ans;
}


//
var maximum69Number = function (num) {
   num = num.toString().split("");

   for (let i = 0; i < num.length; i++) {
      if (num[i] !== '9') {
         num[i] = '9';
         break;
      }
   }
   return parseInt(num.join(''));
};
//console.log(maximum69Number(9669));


// 657. Robot Return to Origin
var judgeCircle = function (moves) {
   let posX = 0;
   let posY = 0;

   for (let m of moves) {
      //console.log(move)
      switch (m) {
         case 'U': posY++; break;
         case 'D': posY--; break;
         case 'R': posX++; break;
         case 'L': posX--; break;
      }
   }
   return posX === 0 && posY === 0;
};
//console.log(judgeCircle("RRDD"))


// 1365. How Many Numbers Are Smaller Than the Current Number
var smallerNumbersThanCurrent = function (nums) {
   let ans = new Array(...nums);
   let obj = {};
   ans = ans.sort((a, b) => a - b);
   //console.log(ans)

   for (let i = 0; i < ans.length; i++) {
      if (obj[ans[i]] == undefined) {
         obj[ans[i]] = i;
      }
   }

   for (let i = 0; i < nums.length; i++) {
      ans[i] = obj[nums[i]];
   }
   return ans;
};
//console.log(smallerNumbersThanCurrent([9, 1, 1, 1, 10]));


function calculateDaysSince() {
   let today = new Date();
   const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
   let date, daysSince;

   date = new Date(2015, 9, 20);
   daysSince = Math.floor(Math.abs((today - date) / oneDay));

   return daysSince;
}
//console.log(calculateDaysSince());


// 3. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
   let start = 0;
   let end = start + 1;
   let chars = {};
   let maxLen = 0;

   if (s.length === 0) { return 0; }

   while (end < s.length) {
      chars[s[start]] = 1;

      if (chars[s[end]] === undefined) {
         chars[s[end]] = 1;
         end++;
      } else {
         let len = end - start;
         if (len > maxLen) {
            maxLen = len;
         }
         start = start + 1;
         end = start + 1;
         chars = {};
      }
      //console.log(chars);
   }
   return Math.max(maxLen, end - start);

   /* let hash = new Map();
   let max = 0;
   let start = 0;
   let end = 0;

   // go through s array
   for (let i = 0; i < s.length; i++) {
      if (!hash.has(s[i])) {
         hash.set(s[i], i);
      } else {
         start = Math.max(start, hash.get(s[i]) + 1);
         hash.set(s[i], i);
      }
      end++;
      max = Math.max(max, end - start);
   }
   return max; */
};
//console.log(lengthOfLongestSubstring("abcabcbb"));


// 189. Rotate Array
var rotate = function (nums, k) {
   if (k > nums.length - 1) {
      k = k % nums.length;
   }
   if (k === 0) { return; }
   let arr = [...nums];

   for (let i = 0; i < nums.length; i++) {
      let swapIndex = (nums.length - k + i) % nums.length;
      nums[i] = arr[swapIndex];
      //console.log(nums)
   }

   /* if (k > nums.length - 1) {
      k = k % nums.length;
   }
   if (k === 0) { return; }
   let i = 0;
   let swapIndex = k;
   let temp = nums[k];

   while (i < nums.length) {
      if (i === 0) {
         nums[swapIndex] = nums[0];
      } else {
         let swapped = nums[swapIndex];
         nums[swapIndex] = temp;
         temp = swapped;
      }
      swapIndex = (swapIndex + k) % nums.length;
      i++;
      //console.log(nums)
   } */
};


// 151. Reverse Words in a String
var reverseWords = function (s) {
   s = s.trim();
   let words = s.split(" ");
   let len = words.length;
   let reversed = words[len - 1];

   for (let i = len - 2; i > -1; i--) {
      if (words[i] === '') {
         continue;
      }
      reversed = reversed + " " + words[i];
   }
   return reversed;
};
//console.log(reverseWords("  Bob    Loves  Alice   "));


// 977. Squares of a Sorted Array
var sortedSquares = function (nums) {
   for (let i = 0; i < nums.length; i++) {
      nums[i] = nums[i] * nums[i];
   }
   return nums.sort((a, b) => a - b);
};

/*var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    const result = new Array(nums.length);

    for (let i = nums.length - 1; i >= 0; i--) {
        const leftVal = Math.abs(nums[left]);
        const rightVal = Math.abs(nums[right]);

        if(leftVal > rightVal) {
            result[i] = leftVal * leftVal;
            left++;
        } else {
            result[i] = rightVal * rightVal;
            right--;
        }
    }
    return result;
};*/


// 1160. Find Words That Can Be Formed by Characters
var countCharacters = function (words, chars) {
   const map = new Map();
   let ans = 0;

   for (let i = 0; i < chars.length; i++) {
      if (map.get(chars[i]) > 0) {
         let num = map.get(chars[i]);
         map.set(chars[i], ++num);
      } else {
         map.set(chars[i], 1);
      }
   }

   words.forEach((item) => {
      const letters = new Map();
      let flag = false;

      for (let i = 0; i < item.length; i++) {
         if (letters.get(item[i]) > 0) {
            let num = letters.get(item[i]);
            letters.set(item[i], ++num);
         } else {
            letters.set(item[i], 1);
         }
      }

      for (let [key, value] of letters) {
         if (map.get(key) < value || map.get(key) == undefined) {
            flag = true;
            break;
         }
      }
      if (!flag) {
         ans = ans + item.length;
      }
   });
   return ans;
};
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));


/* - Given an array of integers and a target integer, return true if the array contains 2 integers that sum up to target
Input: [3, 2, 1, 4, 5, 6], target = 10
Output: true

function sum(input, target) {
   let obj = {};

  for (int i = 0; i < input.length; i++) {
       obj[input[i]] = input[i]
  }

   for (int i = 0; i < input.length; i++) {
      int diff = target - input[i];
    if (obj[diff] != null &&) {
        return iftrue;
    }
  }
  return false;

  // array

}


class Node {
   int value
  Node next?
}

1-2-3-4-5
5-4-3-2-1- null
function reverse(Node head) {
   if (head == null) return head;

  Node reversed = null;
  Node next;

  while(head != null) {
       next = head.next; //3-4-5
    head.next = reversed // 2-1-null
    reversed = head; //2-1-null
    head = next; // 3-4-5
  }
  return reversed; //5-4-3
}

 */