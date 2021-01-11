/* const myarray = [-6, -91, 1011, -100, 84, -22, 0, 1, 473]
const output = solution(myarray)
console.log(output)

function solution(A) {
   // write your code in JavaScript (Node.js 8.9.4)
   const length = A.length
   let oneDigit = []

   for (let i = 0; i < length; i++) {
      // we only care about the one digit integers
      if (A[i] > -10 && A[i] < 10) { // so range is -9 to 9
         oneDigit.push(A[i])
      }
   }

   // assumption is such that there is at least one element that satisfies the condition, so no need to check whether array is empty
   return Math.max(...oneDigit)
} */


/* const myarray = [1,0,1,0,1,1]
//const myarray = [1,1,0,1,1]
//const myarray = [0,1,0]
//const myarray = [0,1,1,0]
const output = solution(myarray)
console.log(output)

function solution(A) {
   const length = A.length

   // there are only 2 possibilities where the series always alternate, either start with 0 (0,1,0,1) or start with 1 (1,0,1,0)
   // so we fill 2 other arrays to simulate the 2 possibilities & compare which has the least amount of flips/diff
   let set1 = fillArray(length, 0, 1)
   let set2 = fillArray(length, 1, 0)

   // compare A with set1 & set2
   let count1 = compare(length, set1, A)
   let count2 = compare(length, set2, A)

   // finally, compare which has the least flips/diff and return the minimum value
   return Math.min(count1,count2)
}

function fillArray(length, x, y) {
   let myarray = []

   for (let i = 0; i < length; i++) {
      if (i % 2 == 0) { // even numbers 0,2,4...
         myarray[i] = x
      }
      else { // odd numbers 1,3,5,...
         myarray[i] = y
      }
   }
   return myarray
}

function compare(length, set, A) {
   let count = 0

   for (let i = 0; i < length; i++) {
      if (A[i] != set[i]) {
         count++
      }
   }
   return count
} */


const string = 'bdaaadadb' //'abacb' //'bdaaadadb' //'zthtzh'
const output = solution(string)
console.log(output)

function temptest(S) {
   const length = S.length
   //let front, back = 0
   //let letters = {}

   if (length % 2 == 0) { // length is even. since all characters must occur even number of times, we only wanna check when string is even
      return allLettersEven(S, length)
      /* for (let i = length; i != 0; i = i - 2) { // we check the full string first, then decrement by 2 each step
         // console.log(i)
         front = i - 1
         back = 0
         while (front < length) { // we want to slide from (0,i) to (1,i+1) as long as it is not out of bounds
            let letters = {}
            let flag = false
            let subString = S.substr(back, i)

            subString.split('').map((char) => { // record all the letters count for a particular substring
               if (!letters[char]) {
                  letters[char] = 1
               }
               else {
                  letters[char]++
               }
            })
            
            console.log(letters)
            
            for (let char in letters) {
               if (letters[char] % 2 == 0) { // check if all letters occur even times
                  flag = true
               } 
               else { 
                  // if any letter is found not occuring even times, then stop. Not this substring. Onto next substring
                  flag = false
                  break
               }
            }

            if (flag) { // only return i if all letters occur even times
               return i
            }

            front++
            back++
            
         }
      } */
   }
   else { // length is odd
      let max = length - 1

      return allLettersEven(S, max)
   }

   // return length
}

function allLettersEven(S, maxSubStrLength) {
   let front, back = 0
   for (let i = maxSubStrLength; i != 0; i = i - 2) { // we check the full string first, then decrement by 2 each step
      // console.log(i)
      front = i - 1
      back = 0
      while (front < S.length) { // we want to slide from (0,i) to (1,i+1) as long as it is not out of bounds
         let letters = {}
         let flag = false
         let subString = S.substr(back, i)

         subString.split('').map((char) => { // record all the letters count for a particular substring
            if (!letters[char]) {
               letters[char] = 1
            }
            else {
               letters[char]++
            }
         })

         console.log(letters)

         for (let char in letters) {
            if (letters[char] % 2 == 0) { // check if all letters occur even times
               flag = true
            }
            else {
               // if any letter is found not occuring even times, then stop. Not this substring. Onto next substring
               flag = false
               break
            }
         }

         if (flag) { // only return i if all letters occur even times
            return i
         }

         front++
         back++
      }
   }
   // if reach here, then there is no substring where all letters occur even number of times
   return 0
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
   // write your code in JavaScript (Node.js 8.9.4)
   const length = S.length

   if (length % 2 == 0) {
      // length is even. since all characters must occur even     
      // number of times, we only wanna check when string is even
      return allLettersEven(S, length)
   }
   else {
      // length is odd. Then max substring length where conditions
      // can be fulfilled is length - 1.
      let max = length - 1

      return allLettersEven(S, max)
   }
}

function allLettersEven(S, maxSubStrLength) {
   let front, back = 0

   for (let i = maxSubStrLength; i != 0; i = i - 2) {
      // we check the at max length first, 
      // then decrement by 2 each step
      front = i - 1
      back = 0

      while (front < S.length) {
         // we want to slide from (0,i) to (1,i+1) 
         // as long as it is not out of bounds
         let letters = {}
         let flag = false
         let subString = S.substr(back, i)

         subString.split('').map((char) => {
            // record all the letters count 
            // for a particular substring
            if (!letters[char]) {
               letters[char] = 1
            }
            else {
               letters[char]++
            }
         })

         //console.log(letters)

         for (let char in letters) {
            if (letters[char] % 2 == 0) {
               // check if all letters occur even times
               flag = true
            }
            else {
               // if any letter is found not occuring even times,
               // then stop. Not this substring. Onto next substring
               flag = false
               break
            }
         }

         if (flag) {
            // only return i if all letters occur even times
            return i
         }

         front++
         back++
      }
   }
   // if reach here, then there is no substring 
   // where all letters occur even number of times
   return 0
}
