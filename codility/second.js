/* const myarray = [4,3,2,1,5]
const myarray2 = [0,1,0,0,0] 

const output = fish(myarray, myarray2)

console.log(output) */


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

const myarray = [3,4,3,2,3,-1,3,3]
/* const myarray = [0,4,3,2,3,-1,3,3] */
/* const myarray = [5,5,5,5,5] */
/* const myarray = [1] */
const output = dominator(myarray)
console.log(output)

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