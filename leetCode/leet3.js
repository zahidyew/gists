// 1528. Shuffle String
/* var restoreString = function (s, indices) {
   const letters = s.split("");
   const map = new Map();
   let ans = "";

   for (let i = 0; i < indices.length; i++) {
      map.set(indices[i], i);
   }

   for (let i = 0; i < indices.length; i++) {
      const index = map.get(i);
      ans = ans + letters[index];
   }
   return ans;
}; */
// 1528. Shuffle String
var restoreString = function (s, indices) {
   const letters = s.split("");
   let ans = "";

   for (let i = 0; i < indices.length; i++) {
      const index = indices.indexOf(i);
      ans = ans + letters[index];
   }
   return ans;
};
//console.log(restoreString("aiohn", [3, 1, 4, 2, 0]));


// 1281. Subtract the Product and Sum of Digits of an Integer
var subtractProductAndSum = function (n) {
   n = n.toString();
   let product = 1;
   let sum = 0;

   for (let i = 0; i < n.length; i++) {
      product = product * parseInt(n[i]);
      sum = sum + parseInt(n[i]);
   }
   return product - sum;
};
console.log(subtractProductAndSum(234));