const myarray = [4,3,2,1,5]
const myarray2 = [0,1,0,0,0] 

/*  const myarray = [4, 3, 2, 1, 5, 6]
const myarray2 = [0, 1, 0, 0, 0, 1]  */

/* const myarray = [0, 1]
const myarray2 = [1, 1]  */

/* const myarray = [4, 5, 2, 1, 3]
const myarray2 = [0, 1, 0, 0, 0] */

/* const myarray = [100, 1,2,3,4]
const myarray2 = [1, 0, 0, 0, 0]  */

const output = fish(myarray, myarray2)

console.log(output)


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
            //console.log(i + "" + down)
            /* if (i == length - 1) {
               // last fish
               alive = alive + down.length
               break
            } */
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


   /* if (A.length != B.length) {
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
            if (i == length - 1) { // last fish 
               if (down.length == 1) {
                  alive++
               }
               alive++
               break;
            }

            //console.log('sdasdsadsa' + i)

            if (down.length == 0) { // because the sequence must be 1 0, where 1 is in the lower index than 0
               down.push(A[i])
               // console.log(down)
            } else { // if there is a previous fish, that fish is alive & remove it from down
               alive++
               down.pop()
               down.push(A[i])
               // console.log(down)
            }
         }
         else if (B[i] == 0) { // fish flowing upstream
            if (down.length == 0) { // if there is no fish flowing downstream, then this fish is alive since it does not have to fight
               alive++
            }
            else if (down.length == 1) { // if there is a fish flowing downstream, then check who is bigger 
               //console.log(down[0])
               if (A[i] > down[0]) { // if upstream fish is bigger, eat downstream fish, alive++ and pop down[]
                  alive++
                  down.pop()
               }
               else { // if upstream fish is smaller, it gets eaten by downstream fish. Downstream fish continues on searching his next prey.
                  if (i == length - 1) { // end of array, so Downstream fish survive
                     alive++
                  }
               }
            }
         }
         else {

         }
      }
      return alive
   } */
}