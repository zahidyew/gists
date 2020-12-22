let word = 'Radar'

console.log(word)

/* let x = 0
let reversed = []

for (let i = word.length - 1; i >= 0; i--) {
   reversed[x] = word[i]
   x++
} */

let reversed = ''

for (let i = word.length - 1; i>=0; i--) {
   reversed = reversed + word[i]
}

// reversed = word.split('').reverse().join('')

/* reversed = reversed.toString().replace(/,/g, '').toString()

if (reversed.toString().toLowerCase() === word.toLowerCase())  
   console.log(word + ' is a palindrome') */

console.log(reversed)