const number = 123456

function reformat(num) {
   num = num.toString()
   let length = num.length

   if (length > 3 && length < 7) {
      let last = length - 1

      let test = num.substr(0, length - 3) + ',' + num.substr(last - 2, last)

      return test
   } else if (length > 6 && length < 10) {
      let last = length - 1

      let test = num.substr(0, last - 5) + ',' + num.substr(last - 5, 3) + ',' + num.substr(last - 2, 3)

      return test
   } else {
      return num
   }
}

console.log(reformat(number))

/* const number = 250000

function reformat(num) {
   num = num.toString()

   if (num.length > 3) {
      let counter = num.length / 3

      console.log(parseInt(counter))

      last = num.length - 1

      let test = num.substr(last - 2, last)
      test = num.substr(0, num.length - 3) + ',' + test

      return test
   } else {
      return num
   }
}

console.log(reformat(number)) */










/* const number = 25000

function reformat (num) {
   let x = ''
   let counter = 0
   num = num.toString()

   if (num.length > 3) {
      num = num.split('')
      x = num[0] + ','

      for (let i = 1; i < num.length ; i++) {
         if (counter == 3) {
            x = x + ',' + num[i]
            counter = 1
         } else {
            x = x + num[i]
            counter += 1
         }  
      }
      console.log(counter)
      return x
   } else {
      return num
   }
}

console.log(reformat(number)) */