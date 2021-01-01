/* Solution to Codility problems from https://app.codility.com/programmers/lessons/ 
   Practice for technical interviews. */

// Lesson 1: return the largest Binary Gap for a N number
function binaryGap(N) {
   N = parseInt(N)
   if (N > 0 && N <= 2147483647) {
      const binaryForm = N.toString(2)
      const arr = binaryForm.split('')
      const length = arr.length
      let gaps = []
      let counter = 0
      let flag = false

      //console.log(binaryForm)

      for (let i = 0; i < length; i++) {
         if (arr[i] == 1) {
            // check if its a starting 1 or closing 1
            // if flag = false, then its a starting 1
            if (!flag) {
               flag = true
               counter = 0 //dont count the starting 0s
            } else { // else its a closing 1
               gaps.push(counter) // need to record the number of 0s between the two 1s
               counter = 0 // reset the counter back to zero
            }
         } else { // if its not 1, then it must be 0. So we increment the counter
            counter++
         }
      }
      //console.log(gaps)

      if (gaps.length == 0) {
         return 0
      } else {
         // return the largest Binary Gap
         const max = Math.max(...gaps)
         return max
      }
   } else {
      return 0
   }
}


// Lesson 2, Q1: Shift the last element in an array to the first position and move others +1 for K amount of times.
function cyclicRotation(A, K) {
   for (let i = 1; i <= K; i++) {
      A = moveArray(A)
   }
   console.log(A)
}

function moveArray(array) {
   const lastIndex = array.length - 1
   const arry = array.slice()

   for (let i = 0; i <= lastIndex; i++) {
      if (i == lastIndex) {
         array[0] = arry[i]
      } else {
         array[i + 1] = arry[i]
      }
   }
   return array
}


// Lesson 2, Q2: Find an element in the array that is without a pair
function oddOccurencesInArray(A) {
   let elements = {}

   // this solution is O(n) or O(n^log (n))
   A.map((item) => {
      if (!elements[item]) { // if we dont found the item in our object, then add it to the object
         elements[item] = 1 // this is adding a properties to the object
      } else {
         delete elements[item] // else if its a duplicate, delete the item from our object
      }
   })

   return parseInt(Object.keys(elements))
   //return elements

   // below are simply another ways to solve this problem
   /* A.map((item) => {
      if (elements[item]) {
         delete elements[item]
      } else {
         elements[item] = 1 // this is adding a properties to the object
      }
   }) */

   /* for (let i in A) {
      elements[A[i]] == true ? delete elements[A[i]] : elements[A[i]] = 1
   }  */

   /* for (let i in A) {
      if (elements[A[i]])
         console.log(elements[A[i]])
      else {
         elements[A[i]] = 1 // this is adding a properties to the object
         console.log(elements[A[i]])
      }
         
   } */

   /* for (let [item, counter] of Object.entries(elements)){
      if (counter % 2 != 0) {
         //console.log(item)
         //return parseInt(item)
      }
   } */

   
   /* // this solution is O(n)^2 as we loop inside a loop. So its quite slow
   for (let i = 0; i < A.length; i++) {
      if (A.length == 1) { // exit loop when there is only 1 element. 
         break
      }
      for (let j = i + 1; j < A.length; j++) {
         // when the pair is found, remove the paired elements and reset i. Then, exit the loop.
         if (A[i] == A[j]) { 
            // console.log(i + ' ' + A[i] + ' == ' + j + ' ' + A[j])
            //console.log(A[i] + ' == ' + A[j])
            A.splice(j, 1)
            A.splice(i, 1)
            i = -1
            break
         }
      }
   }
   return A.toString() */
}


// Lesson 3, Q1: Count minimal number of jumps from position X to Y. D is the distance it jumps. 
function minimalJump(X, Y, D) {
   // This is both correct and fast. O(1) time complexity
   let i = Y - X
   let j = Math.floor(i / D)
   // let jumps = Math.floor((Y - X) / D) // simplify one liner. We want to know how many jumps it will take to reach Y

   if ((j * D) + X < Y) { // check if the jumps are enough to get to Y. If not, then we need +1 more jump
      return j + 1
   } else {
      return j // else, jumps are already enough to reach Y.
   }


   /* // Correct solution but very slow. Not ideal at all. O(Y-X) time complexity
   let jumps = 0
   let flag = false

   while(!flag) {
      if (X >= Y) {
         flag = true
         console.log('X is now: ' + X)
      } else {
         X = X + D
         jumps++
      }
   }
   return jumps
   */
}


// Lesson 3, Q2: Find the missing element in a given permutation.
function permMissingElem(A) {
   const N = A.length
   if (N == 0) {
      return 1
   }

   return (((N + 1) * ((N + 1) + 1) / 2) - A.reduce((a, b) => { return a + b }))

   /* const length = A.length
   let flag = false

   if (length == 0) {
      return 1
   } 

   for (let i = 1; i <= length; i++) {
      if (!A.includes(i)) {
         return i
      }
      else {
         flag = true
      }
   }

   if (flag)
      return A[length - 1] + 1 */


   /* if (A.length == 0) {
      return 0
   }
   A = A.sort()

   for (let i = 0; i < A.length; i++) {
      if (A[i] != i + 1) {
         return i + 1
      }
   } 
   return A  */

   // another way of solving, this one using algebra
   /* const N = A.length
   return (((N + 1) * ((N + 1) + 1) / 2) - A.reduce((a,b) => {return a+b})) */
}


// Lesson 3, Q3: Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])
function tapeEquilibrium(A) {
   let difference = []

   if (A.length < 2 || A.length > 100000) {
      return 0
   }

   for (let i = 0; i < A.length - 1; i++) {
      let split1 = A.slice(0, i + 1).reduce((a , b) => a + b)
      let split2 = A.slice(i + 1).reduce((a, b) => a + b) 

      difference.push(Math.abs(split1 - split2))
      //console.log(difference)
   }

   return Math.min(...difference)
}

// Lesson 4, Q1: Find the earliest time when a frog can jump to the other side of a river.
function frogRiverOne(X, A) {
   let array = []

   if (X > 100000 || A.length > 100000 || X < 1 || A.length < 1) {
      return 0
   }

   for (let i = 1; i <= X; i++) {
      let n = A.indexOf(i)

      if (n == -1)
         return -1
      else {
         array[i - 1] = n
      }
   }

   return Math.max(...array)

   
   // return A.indexOf(X)
   
   /* let canCross = false
   let i = -1

   while (!canCross) {
      if (i == A.length) {
         return i = -1
      }
      i++
      //console.log(i + ": " + A[i])
      if (X == A[i]) {
         canCross = true
         return i
      }
   }  */

   /* let i = 0
   while (!canCross) {
      console.log(i + ": " + A[i])
      if (X == A[i]) {
         canCross = true
         break
      }
      i++
   }  */

   // return i
}


// Lesson 4, Q2: Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
function maxCounters(N, A) {
   let counters = Array(N).fill(0)
   let max = 0

   for (let i = 0; i < A.length; i++) {
      if (A[i] <= N) {
         counters[A[i] - 1]++

         if (counters[A[i] - 1] > max) {
            max = counters[A[i] - 1]
         }
      }
      else {
         //let largest = Math.max(...counters)
         counters.fill(max)
      }
   }
   return counters

   /* // let counters = Array.from({ length: N }, () => 0);
   let counters = Array(N).fill(0)

   for (let i = 0; i < A.length; i++) {
      //if (A[i] < 1) {}
      if (A[i] <= N) {
         counters[A[i] - 1]++ // -1 as array index starts at 0
      }
      else { // the element is bigger than N, so we have to set all the counters to the largest counter
         let largest = Math.max(...counters)
         counters.fill(largest)
      }
      //console.log(A[i])
      //console.log(counters) 
   }

   return counters */
}


// Lesson 4, Q3: Find the smallest positive integer that does not occur in a given sequence.
function missingInteger(nums) {
   // my best solution in O(n) or O(N * log(N)) time. 100%
   if (A.indexOf(1) == -1) {
      return 1
   }
   else {
      let positive = []

      for (let i = 0; i < A.length; i++) {
         if (A[i] > 0) {
            positive[A[i]] = A[i]
         }
      }

      for (let i = 1; i <= A.length; i++) {
         if (!positive[i + 1])
            return i + 1
      }
   }

   /* Correct but in O(N**2) time. So, 100% correctness but 25% performance 
   for (let i = 1; i <= nums.length; i++) {
      // check whether the numbers 1,2,..until nums.length exist in the sequence. If not found, by default i is the answer. So return i
      if (nums.indexOf(i) == -1) {
         return i
      } 
      // if all numbers 1,2,..until nums.length exist in the sequence. Then, answer must be i + 1.
      else if (i == nums.length) {
         return i + 1
      }
   }
   return ('something wrong with input given') */


   /* An example how to solve it in O(n) time
   var onlyPositiveInt = [];
   for (var i = 0; i < A.length; i++) {
      if (A[i] > 0) {
         onlyPositiveInt[A[i]] = true;
      }
   }
   for (i = 1; i <= onlyPositiveInt.length; i++) {
      if (!onlyPositiveInt[i]) {
         return i;
      }
   }
   return 1; */
}


// Lesson 4, Q4: Check whether array A is a permutation.
function permCheck(A) {

   const length = A.length
   const sumOfN = (length * (length + 1)) / 2
   let sum = 0
   let myarray = []

   for (let i = 0; i < length; i++) {
      if (myarray[A[i]] == A[i]) {
         return 0
      } else {
         sum = sum + A[i]
         myarray[A[i]] = A[i]
      }
   }

   if (sumOfN - sum != 0) {
      return 0
   } else {
      return 1
   }

   /* nums = nums.sort()
   let flag 
   
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] != i + 1) {
         return 0
      } else {
         flag = 1  
      }
   }

   return flag */
}


// Lesson 5, Q4: Count the number of passing cars on the road
function passingCars(A) {
   // write your code in JavaScript (Node.js 8.9.4)
   const length = A.length
   const limit = 1000000000
   let zeros = 0
   let pairs = 0

   for (let i = 0; i < length; i++) {
      if (A[i] == 1) {
         pairs = pairs + zeros
         if (pairs > limit) {
            return -1
         }
      }
      else { // if it is 0
         zeros++
      }
   }
   return pairs

   /* let passing = 0
   const length = arry.length

   for (let i = 0; i < length; i++) {
      if (passing > 1000000000) {
         return -1
      }
      if (arry[i] == 0) {
         for (let j = i + 1; j < length; j++) {
            if (arry[j] == 1) {
               passing += 1
            }
         }
      }
   }
   return passing */
}


// Lesson 6, Q1: Compute number of distinct values in an array.
function distinct(arry) {
   // write your code in JavaScript (Node.js 8.9.4)
   const l = A.length
   let arr = []
   let d = 0

   for (let i = 0; i < l; i++) {
      if (arr[A[i]] != 1) {
         arr[A[i]] = 1
         d++
      }
   }

   return d

   /* let length = arry.length
   let lists = []

   for (let i = 0; i < length; i++) {
      if (!lists.includes(arry[i])) {
         lists.push(arry[i])
      }
   }

   return lists.length */
}


function triangle(A) {
   const l = A.length
   A = A.sort((a, b) => a - b)

   if (l < 3) {
      return 0
   }
   else {
      for (let i = 0; i < l - 2; i++) {
         if (A[i] > 1 && A[i] + A[i + 1] > A[i + 2]) {
            return 1
         }
      }
      return 0
   }
}

// const output = oddOccurencesInArray([9, 3, 9, 3, 9, 7, 9])
// const output = minimalJump(10, 85, 30)
// const output = permMissingElem([2,3,1,5])
// const output = tapeEquilibrium([3,1,2,4,3])
// const output = frogRiverOne(5, [1,3,1,4,2,3,5,4])
// const output = maxCounters(5, [3,4,4,6,1,4,4])

/* const arrayList = [-1, -3] // [1, 2, 3] //[1, 3, 6, 4, 1, 2]
const output = missingInteger(arrayList) */

/* const arrayList = [4, 1, 3]  //[4,1,3,2] // [4,1,3] 
const output = permCheck(arrayList) */

/* const arrayList = [0,1,0,1,1]  //[4,1,3,2] // [4,1,3] 
const output = passingCars(arrayList) */

/* const arrayList = [2,1,1,2,3,1] //[1,1,1,1,4,5,4,4,4,4,0,-1,0,-2,-1,0]
const output = distinct(arrayList) */

const arrayList = [9,3,9,3,9,7,9] //[1,1,1,1,4,5,4,4,4,4,0,-1,0,-2,-1,0]
const output = oddOccurencesInArray(arrayList)

console.log(output)