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
   //let counter = 1

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
      //console.log('Counter: ' + counter)
      //counter++
   }
   return A.toString()
   //return (A.toString() + ' is unpaired.')
}


// Lesson 3, Q1: Count minimal number of jumps from position X to Y. D is the distance it jumps. 
function minimalJump(X, Y, D) {
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
}


// Lesson 3, Q2: Find the missing element in a given permutation.
function permMissingElem(A) {
   if (A.length == 0) {
      return 0
   }
   A = A.sort()

   for (let i = 0; i < A.length; i++) {
      if (A[i] != i + 1) {
         return i + 1
      }
   } 
   return A 

   // another way of solving, this one using algebra
   /* const N = A.length
   return (((N + 1) * ((N + 1) + 1) / 2) - A.reduce((a,b) => {return a+b})) */
}


// Lesson 3, Q3: Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])
function tapeEquilibrium(A) {
   let difference = []

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
   return A.indexOf(X)
   
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
   // let counters = Array.from({ length: N }, () => 0);
   let counters = Array(N).fill(0)

   for (let i = 0; i < A.length; i++) {
      /* if (A[i] < 1) {   
         
      } */
      if (A[i] < N) {
         counters[A[i] - 1]++ // -1 as array index starts at 0
      }
      else { // the element is bigger than N, so we have to set all the counters to the largest counter
         let largest = Math.max(...counters)
         counters.fill(largest)
      }
      /* console.log(A[i])
      console.log(counters) */
   }

   return counters
}


// Lesson 4, Q3: Find the smallest positive integer that does not occur in a given sequence.
function missingInteger(nums) {
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
   return ('something wrong with input given')
}


// Lesson 4, Q4: Check whether array A is a permutation.
function permCheck(nums) {
   nums = nums.sort()
   let flag 
   
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] != i + 1) {
         return 0
      } else {
         flag = 1  
      }
   }

   return flag
}


// Lesson 5, Q4: Count the number of passing cars on the road
function passingCars(arry) {
   let passing = 0
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
   return passing
}


// Lesson 6, Q1: Compute number of distinct values in an array.
function distinct(arry) {
   let length = arry.length
   let lists = []

   for (let i = 0; i < length; i++) {
      if (!lists.includes(arry[i])) {
         lists.push(arry[i])
      }
   }

   return lists.length
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

const arrayList = [2,1,1,2,3,1] //[1,1,1,1,4,5,4,4,4,4,0,-1,0,-2,-1,0]
const output = distinct(arrayList)

console.log(output)