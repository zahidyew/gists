/* const myarray = [4,3,2,1,5]
const myarray2 = [0,1,0,0,0] 

const output = fish(myarray, myarray2)

console.log(output) */

// Lesson 7: N voracious fish are moving along a river. Calculate how many fish are alive.
function fish(A, B) {
   if (A.length != B.length) {
      return -1
   } else {
      const length = A.length
      let down = []
      let alive = 0

      for (let i = 0; i < length; i++) {
         if (i == 0 && B[i] == 0) { // first fish and flowing upstream is auto alive
            alive++
         }
         else if (B[i] == 1) { // fish flowing downstream initiate attack to upstream fish 
            down.push(A[i])
         }
         else if (B[i] == 0) { // fish flowing upstream
            let survive = false

            while (down.length != 0) { // while there are fish flowing downstream, it has to continue fighting
               if (A[i] < down[down.length - 1]) { // if it is smaller in size compared to nearest Downstream fish, then it gets eaten
                  survive = false
                  break
               } else { // if it is bigger
                  down.pop()
                  survive = true
               }
            }

            // if it survives or if there is no Downstream fish to fight
            if (survive == true || down.length == 0) {
               alive++
            }
         }
      }

      // check if there are surviving Downstream fishes & record them
      if (down.length != 0) {
         alive = alive + down.length
      }

      return alive
   }
}

/* const myarray = [3,4,3,2,3,-1,3,3]
//const myarray = [0,4,3,2,3,-1,3,3]
//const myarray = [5,5,5,5,5]
//const myarray = [1]
const output = dominator(myarray)
console.log(output) */

// Lesson 8: Find an index of an array such that its value occurs at more than half of indices in the array.
function dominator(A) {
   const length = A.length 
   let stack = []

   for (let i = 0; i < length; i++) {
      stack.push(A[i])

      if (stack.length > 1) {
         if (stack[stack.length - 1] != stack[stack.length - 2]) {
            // it is different, then pop the pair by pop() twice 
            stack.pop()
            stack.pop()
         }
         // else it is equivalent, then do nothing
      }
   }

   if (stack.length > 0) {
      const half = length / 2
      let leader = stack[stack.length - 1]
      let count = 0
      let leaderIndex = -1
      //let leaderIndex = []

      for (let i = 0; i < length; i++) {
         if (A[i] == leader) {
            if (leaderIndex == -1) {
               leaderIndex = i
            }
            //leaderIndex.push(i)
            count++
         }
      }

      if (count > half) {
         return leaderIndex
      }
      else {
         return -1
      }
   }
   else {
      return -1
   }
}


// calculate the prefix sums in O(n) time 
const prefixSums = (myarray) => {
   const length = myarray.length
   let arry = Array(length + 1).fill(0)

   for (let i = 1; i < length + 1; i++) {
      arry[i] = arry[i - 1] + myarray[i - 1]
   }

   return arry
   //return arry[length]
}

/* const myarray = [5,10,15] //[1,2,3,4,5]
const output = prefixSums(myarray)
console.log(output) */


// calculate the suffix sums
const suffixSums = (myarray) => {
   const n = myarray.length
   let arry = Array(n + 1).fill(0)

   for (let i = n - 1; i >= 0; i--) {
      //console.log(i)
      console.log(arry[i])
      //console.log(myarray[i - 1])
      arry[i] = arry[i + 1] + myarray[i]
   }

   return arry
}

/* const myarray = [5, 10, 15] //[1,2,3,4,5]
const output = suffixSums(myarray)
console.log(output) */

// Lesson 5: Compute number of integers divisible by k in range [a..b].
const countDiv = (A, B, K) => {
   /* let num = 0
   
   for (let i = A; i < B + 1; i++) {
      if (i % K == 0) {
         num++
      }
   }
   return num */

   /* const limit = B + 1
   let flag = false 
   let num = 0
   let firstDivisibleNum = 0

   for (let i = A; i < limit; i++) {
      if (i % K === 0) {
         num++
         firstDivisibleNum = i
         flag = true
         break
      }
   }

   if (flag) {
      for (let i = firstDivisibleNum + K; i < limit; i += K) {
         num++
      }
      return num
   }
   else {
      return 0
   }  */

   //return Math.floor(B / K) - Math.ceil(A / K) + 1;

   const maxDiv = Math.floor(B / K)
   const eliminate = Math.ceil(A / K)
   const answer = maxDiv - eliminate + 1

   return answer
}

/* const output = countDiv(6,11,2)//(10,10,7)//
console.log(output) */

// Lesson 9: Given a log of stock prices compute the maximum possible earning.
const maxProfit = (A) => {
   /* if (A.length == 0 || A.length == 1) {
      return 0
   }

   const min = Math.min(...A)
   let max = Math.max(...A)

   if (A.indexOf(min) < A.indexOf(max)) {
      return max - min
   }
   else {
      max = 0
      for (let i = A.indexOf(min) + 1; i < A.length; i++) {
         if (A[i] > min && A[i] > max) {
            max = A[i]
         }
      }
      if (max === 0) {
         return 0 
      }  
      else {
         return max - min
      }
   } */

   const n = A.length
   let max = 0
   if (n == 0 || n == 1) {
      return 0
   }

   for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
         let diff = A[i] - A[j]
         
         if (diff < max) {
            max = diff
         }
      }
   }

   //console.log(Math.abs(max))
   return Math.abs(max)
}

/* const myarray = [23171, 21011, 21123, 21366, 21013, 21367]
const output = maxProfit(myarray)
console.log(output) */


// Lesson 15: Compute number of distinct absolute values of sorted array elements.
const absDistinct = (A) => {
   const n = A.length
   let arry = []
   let count = 0

   for (let i = 0; i < n; i++) {
      A[i] = Math.abs(A[i])

      if (arry[A[i]] != 1) {
         arry[A[i]] = 1
         count++
      }
   }

   return count
}

/* const myarray = [-5,-3,-1,0,3,6]
const output = absDistinct(myarray)
console.log(output) */


// Lesson 10: Count factors of given number n.
const countFactors = (N) => {
   const k = Math.floor(Math.sqrt(N))
   let factors = 0

   // k + 1 to account for numbers such as 1, 9, 25 & etc
   for (let i = 1; i < k + 1; i++) {
      if (N % i === 0) {
         if (i * i === N) {
            // eg., 3 * 3 = 9, only count as 1 (3 is factor of 9)
            factors++
         } else {
            //eg., 1 * 9 = 9, count as 2 (1 & 9 are factors of 9)
            factors = factors + 2
         } 
      }
   }
   return factors
}

const num = 24
const output = countFactors(num)
console.log(output)