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
//console.log(subtractProductAndSum(234));


// 1662. Check If Two String Arrays are Equivalent
var arrayStringsAreEqual = function (word1, word2) {
   let str1 = "";
   let str2 = "";

   for (let i = 0; i < word1.length; i++) {
      str1 = str1 + word1[i];
   }
   for (let i = 0; i < word2.length; i++) {
      str2 = str2 + word2[i];
   }

   if (str1 === str2) {
      return true;
   } else {
      return false;
   }

   //return word1.join('') === word2.join('')
};
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));


// 1290. Convert Binary Number in a Linked List to Integer
var getDecimalValue = function (head) {
   if (head === null) return head;
   let binary = "";

   while (head != null) {
      binary = binary + head.val;
      head = head.next;
   }
   //console.log(binary);
   return parseInt(binary, 2);
};