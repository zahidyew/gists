function reverse(str) {
   let rev = ''

   for (let i = str.length - 1; i >= 0; i--) {
      rev = rev + str[i]
   }
   return rev
}

function isPalindrome(str) {
   let rev = ''
   str = str.toString().toLowerCase()

   for (let i = str.length - 1; i >= 0; i--) {
      rev = rev + str[i]
   }
   if (rev == str) 
      return rev + ' true'
   else 
      return rev + ' false'
}

function capitalize(str) {
   let strArr = str.toLowerCase().split(' ')

   for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1)
   }

   return strArr.join(' ')
}

function maxCharacter(str) {
   const charMap = {}
   let maxNum = 0
   let maxChar = ''

   str.toLowerCase().split('').forEach((char) => {
      if(charMap[char]) {
         charMap[char]++
      } else {
         charMap[char] = 1
      }
   })

   for(let char in charMap) {
      if(charMap[char] > maxNum) {
         maxNum = charMap[char]
         maxChar = char
      }
   }

   return charMap
   //return maxChar
}

function longestWord(sen) {
   let wordArr = sen.toLowerCase().split(' ')

   const sort = wordArr.sort((a,b) => {
      return b.length - a.length
   })

   return wordArr
}

function chunkArray(arr, len) {
   const chunked = []

   for (let i = 0; i < arr.length; i += len) {
      chunked.push(arr.slice(i, i + len))
   }
   return chunked
}

function flattenArray(arrays) {
   return arrays.reduce((a,b) => {
      return a.concat(b)
   })
}

function fizzBuzz() {
   for(let i = 1; i <= 100; i++) {
      if (i % 15 == 0) {
         console.log('FizzBuzz')
      } else if (i % 3 == 0) {
         console.log('Fizz')
      } else if (i % 5 == 0) {
         console.log('Buzz')
      } else {
         console.log(i)
      }
   }
}

function ascending(arr) {
   // BUBBLE SORT
   // do x amount of iterations, where x = array.length
   /* for (let i in arr) {
      // for each iteration, compare the current number
      // with the next number, if current number is 
      // bigger, then swap them. This will make the
      // largest number rise to the top.
      for (let j = 0; j < arr.length - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
         }
      }
   } */

   for (let i in arr) {
      for (let j = 0; j < arr.length - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
         }
      }
   }
   return arr
}

const lists = [3, 1, 7, 0, 17, 1]
const output = ascending(lists)
console.log(output)

// return the largest Binary Gap for a N number
/* function binaryGap(N) {
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
} */

/* function cyclicRotation(A, K) {
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
}  */

/* function oddOccurencesInArray(A) {
   let repeat = Math.floor(A.length / 2)
   let counter = 1

   for (let i = 0; i < A.length; i++) {
      if (A.length == 1) {
         break
      }
      //console.log(A[i])
      //console.log('i is ' + i)
      
      for (let j = i + 1; j < A.length; j++) {
         //console.log(j)
         if (A[i] == A[j]) {
            // console.log(i + ' ' + A[i] + ' == ' + j + ' ' + A[j])
            console.log(A[i] + ' == ' + A[j])
            A.splice(j, 1)
            A.splice(i, 1)
            i = -1
            j = 0
            //repeat-- 
            //console.log(A)
            //console.log('repeat is ' + repeat)
            break
         }
      }
      console.log('Counter: ' + counter)
      counter++
   }

   return A.toString()
} */