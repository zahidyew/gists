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

/* const num = 24
const output = countFactors(num)
console.log(output) */

// Find the Greatest Common Divisor of 2 numbers
function gcd (a,b) {
   if (a == b) {
      //console.log(a + ":" + b)
      return a
   }
   if (a > b) {
      return gcd(a - b, b)
   }
   else {
      return gcd(a, b - a)
   }
}

//console.log(gcd(24, 9))

// Find the Lowest Common Multiple of 2 numbers
function lcm(a, b) {
   const div = gcd(a,b)

   return (a * b) / div
}

//console.log(lcm(24, 9))


// Lesson 12: There are N chocolates in a circle. Count the number of chocolates you will eat.
function chocolatesByNumbers(N, M) {
   if (N === 1) {
      // there is only 1 chocolate. so you eat only 1
      return 1
   }
   else if (M === 1) {
      // if you go 1 by 1 then you will eat all the chocolates
      return N
   }
   else {
      // for any other combinations, you need to find the LCM first
      // as that is where the 2 numbers intersect (i.e. finding the choc. wrapper)
      // after finding LCM, simply divide it to know how many chocs you will eat. 
      const div = gcd(N, M)
      const mult = (N * M) / div
      const count = mult / M

      return count
   }
} 

//console.log(chocolatesByNumbers(10, 4))  //1000000000, 1


// Lesson 16: Tie adjacent ropes to achieve the maximum number of ropes of length >= K.
function tieRopes(K, A) {
   const len = A.length
   let sum = 0
   let n = 0

   for (let i = 0; i < len; i++) {
      sum = sum + A[i]

      if (sum >= K) {
         sum = 0
         n++
      }
   }
   return n
}

//console.log(tieRopes(4, [1,2,3,4,1,1,3]))


// Lesson 16: Find a maximal set of non-overlapping segments.
/* function maxNonoverlappingSegments(A, B) {
   const len = A.length
   let max = 0

   for (let i = 0; i < len; i++) {
      let n = 1
      let x = B[i]
      for (let j = 1; j < len; j++) {
         if (A[j] > x) {
            x = B[j]
            n++
         }
      } 
      if (n > max) {
         max = n
      } 
   }
   return max
}
console.log(maxNonoverlappingSegments([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])) */

// Lesson 16: Find a maximal set of non-overlapping segments.
/* Given the conditions of the question, the best way to determine whether 2 segments are non-overlapping here is 
   to check if the start of the next segment(y) is bigger than the previous(x) segment ending. If true, then we take 
   that segment(y) ending as the new marker and compare it to the next segment... */
function maxNonoverlappingSegments(A, B) {
   const len = A.length
   let nonOverlaps = 1
   let marker = B[0]

   if (len < 2) {
      // no need to check for non-overlapping segments if length is < 2, just return its length (1 or 0) directly
      return len
   }

   for (let i = 0; i < len - 1; i++) {
      if (A[i+1] > marker) {
         marker = B[i+1]
         nonOverlaps++
      }
   }
   return nonOverlaps
}
console.log(maxNonoverlappingSegments([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]))
