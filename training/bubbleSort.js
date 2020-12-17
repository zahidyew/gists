const lists = [3, 1, 7, 0, 17, 1]
console.log(lists)


function ascending (sssdas) {
   // BUBBLE SORT
   // do x amount of iterations, where x = array.length
   for (let i in sssdas) {
      // for each iteration, compare the current number
      // with the next number, if current number is 
      // bigger, then swap them. This will make the
      // largest number rise to the top.
      for (let j = 0; j < sssdas.length - 1; j++) {
         if (sssdas[j] > sssdas[j + 1]) {
            let temp = sssdas[j]
            sssdas[j] = sssdas[j + 1]
            sssdas[j + 1] = temp
         }
      }
   }
   return sssdas
}

ascending(lists)
console.log(lists)


function descending (arry) {
   for (let i in arry) {
      for (let x = 0; x < arry.length - 1; x++) {
         if (arry[x] < arry[x+1]) {
            let temp = arry[x]
            arry[x] = arry[x+1]
            arry[x+1] = temp
         }
      }
   }
}

descending(lists)
console.log(lists)
