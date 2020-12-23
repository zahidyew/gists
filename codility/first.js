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

// const output = oddOccurencesInArray([9, 3, 9, 3, 9, 7, 9])
const output = minimalJump(10, 85, 30)
console.log(output)