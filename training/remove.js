/* Remove duplicates in array */

const lists = [3, 1, 3, 3, 17, 1]
console.log(lists)

// new array to put non-duplicate items
let newList = [] 

// shorter & more concise
for (let i in lists) {
   let flag = false

   // compare item in lists[i] to items in newList
   for (let j in newList) {
      // if a match is found, flag = true & stop loop
      if (lists[i] == newList[j]) {
         flag = true
         break
      }
   }

   // only non-duplicate is added to the new array
   if (flag == false)
      newList[newList.length] = lists[i]
}

console.log(newList)

// alternative way
/* for (let i in lists) {
   let flag = false

   if (i != 0) {
      for (let j in newList) {
         if (lists[i] == newList[j])
            flag = true
      }
      flag == false ? newList[newList.length] = lists[i] :
      false

   } else {
      newList[i] = lists[i]
   }
} */

