package com.javaSolutions;

import java.util.*;

public class LeetcodeQues {

   // 169. Majority Element
   public static int majorityElement(int[] nums) {
      int len = nums.length;
      int majority = len / 2;
      HashMap<Integer, Integer> hash = new HashMap<>();

      for (int i = 0; i < len; i++) {
         if (hash.get(nums[i]) == null) {
            hash.put(nums[i], 1);
         } else {
            int c = hash.get(nums[i]);
            hash.put(nums[i], ++c);
         }
         if (hash.get(nums[i]) > majority) {
            return nums[i];
         }
         // System.out.println(hash);
      }
      return 0;
   } 

   // 485. Max Consecutive Ones
   public static int findMaxConsecutiveOnes(int[] nums) {
      int count = 0;
      int max = 0;

      for (int i = 0; i < nums.length; i++) {
         if (nums[i] == 1) {
            count++;
         } else {
            if (count > max) {
               max = count;
            }
            count = 0;
         }
      }
      return Math.max(count, max);
   }

   // 1480. Running Sum of 1d Array
   public int[] runningSum(int[] nums) {
      int n = nums.length;
      int sum = 0;
      int[] ans = new int[n];

      for (int i = 0; i < n; i++) {
         sum = sum + nums[i];
         ans[i] = sum;
      }
      return ans;
   }

   // 344. Reverse String
   public void reverseString(char[] s) {
      int len = s.length;
      int limit = len / 2;

      for (int i = 0; i < limit; i++) {
         int swapIndex = len - i - 1;
         char temp = s[i];
         s[i] = s[swapIndex];
         s[swapIndex] = temp;
      }
   }

   // 461. Hamming Distance
   private String fillZeros(int aLen, int bLen, String binary) {
      for (int i = 0; i < aLen - bLen; i++) {
         String zero = "0";
         binary = zero.concat(binary);
      }
      return binary;
   }
   public int hammingDistance(int x, int y) {
      String xBinary = Integer.toBinaryString(x);
      String yBinary = Integer.toBinaryString(y);
      int xLen = xBinary.length();
      int yLen = yBinary.length();
      int diff = 0;

      if (yLen > xLen) {
         xBinary = fillZeros(yLen, xLen, xBinary);
         xLen = xBinary.length();
      } else if (xLen > yLen) {
         yBinary = fillZeros(xLen, yLen, yBinary);
         yLen = yBinary.length();
      }

      for (int i = 0; i < xLen; i++) {
         if (xBinary.charAt(i) != yBinary.charAt(i)) {
            diff++;
         }
         // System.out.println(i);
      }
      // System.out.println(xBinary);
      // System.out.println(x^y);
      return diff;
   }

   // 709. To Lower Case
   public String toLowerCase(String str) {
      StringBuilder ans = new StringBuilder();

      for (int i = 0; i < str.length(); i++) {
         int caseInDecimal = (int) str.charAt(i); // convert letter to ASCII Code

         // check if the letter is uppercase
         if (caseInDecimal > 64 && caseInDecimal < 91) {
            // difference between each uppercase and its
            // lowercase sibling is exactly +32 in ASCII Table.
            caseInDecimal = caseInDecimal + 32;
         }

         char lowerCased = (char) caseInDecimal; // convert to a letter
         ans.append(lowerCased);
         // System.out.println(letter);
      }
      return ans.toString();
   }

   // 278. First Bad Version
   public int firstBadVersion(int n) {
      int start = 1;
      int end = n;

      while (start < end) {
         int mid = start + (end - start) / 2;
         if (isBadVersion(mid)) {
            end = mid;
         } else {
            start = mid + 1;
         }
      }
      return start;
   }
   public boolean isBadVersion(int ver) {
      // placeholder func to get rid of errors
      // this func is specified in Leetcode
      return true;
   } 

   // 1323. Maximum 69 Number
   public int maximum69Number(int num) {
      StringBuilder number = new StringBuilder(Integer.toString(num));

      for (int i = 0; i < number.length(); i++) {
         if (number.charAt(i) != '9') {
            number.setCharAt(i, '9');
            break;
         }
      }
      return Integer.parseInt(number.toString());
   }

   // 905. Sort Array By Parity
   public int[] sortArrayByParity(int[] A) {
      int len = A.length;
      int even = 0;
      int odd = len - 1;
      int[] ans = new int[len];

      for (int i = 0; i < len; i++) {
         if (A[i] % 2 == 0) {
            ans[even] = A[i];
            even++;
         } else {
            ans[odd] = A[i];
            odd--;
         }
      }
      return ans;
   }

   // 657. Robot Return to Origin
   public boolean judgeCircle(String moves) {
      int posX = 0;
      int posY = 0;

      /*
       * for (int i = 0; i < moves.length(); i++) { if (moves.charAt(i) == 'U') { posX
       * = posX + 1; } else if (moves.charAt(i) == 'D') { posX = posX - 1; } else if
       * (moves.charAt(i) == 'R') { posY = posY + 1; } else if (moves.charAt(i) ==
       * 'L') { posY = posY - 1; } }
       */
      for (char c : moves.toCharArray()) {
         switch (c) {
            case 'U':
               posX++;
               break;
            case 'D':
               posX--;
               break;
            case 'R':
               posY++;
               break;
            case 'L':
               posY--;
               break;
         }
      }
      return posX == 0 && posY == 0;
   }

   // 1431. Kids With the Greatest Number of Candies
   public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
      List<Boolean> ans = new ArrayList<>();
      int max = 0;
      int len = candies.length;

      // finding max value
      for (int i = 0; i < len; i++) {
         if (candies[i] > max) {
            max = candies[i];
         }
      }

      // determine whether adding extra candies will make them > max.
      for (int i = 0; i < len; i++) {
         int sum = candies[i] + extraCandies;
         if (sum >= max) {
            ans.add(true);
         } else {
            ans.add(false);
         }
      }
      return ans;
   }

   // 942. DI String Match
   public int[] diStringMatch(String S) {
      int N = S.length();
      int start = 0;
      int end = N;
      int[] ans = new int[N + 1];

      for (int i = 0; i < N; i++) {
         if (S.charAt(i) == 'I') {
            ans[i] = start;
            start++;
         } else if (S.charAt(i) == 'D') {
            ans[i] = end;
            end--;
         }
      }
      // fill the last index in the array
      ans[N] = start;
      return ans;
   }

   // 20. Valid Parentheses
   public boolean isValid(String s) {
      int len = s.length();
      Stack<Character> stack = new Stack<>();
      HashMap<Character, Character> map = new HashMap<>();

      if (len % 2 == 1)
         return false;

      map.put('}', '{');
      map.put(']', '[');
      map.put(')', '(');

      for (char c : s.toCharArray()) {
         if (c == '{' || c == '[' || c == '(') {
            stack.push(c);
         } else {
            if (stack.empty()) {
               return false;
            } else if (map.get(c) == stack.peek()) {
               stack.pop();
            } else {
               return false;
            }
         }
      }

      if (stack.empty()) {
         return true;
      } else {
         return false;
      }
   }

   // 1512. Number of Good Pairs
   public int numIdenticalPairs(int[] nums) {
      /*
       * int len = nums.length; int pairs = 0;
       * 
       * for (int i = 0; i < len - 1; i++) { for (int j = i+1; j < len; j++) { if
       * (nums[i] == nums[j]) { pairs++; //System.out.println(nums[i] + "==" +
       * nums[j]); } } } return pairs;
       */

      int pairs = 0;
      HashMap<Integer, Integer> map = new HashMap<>();

      for (int i : nums) {
         if (map.get(i) == null) {
            map.put(i, 1);
         } else {
            int c = map.get(i);
            pairs = pairs + c;
            map.put(i, ++c);
         }
      }
      return pairs;
   }

   // 1304. Find N Unique Integers Sum up to Zero
   public int[] sumZero(int n) {
      int[] ans = new int[n];

      if (n == 1) {
         ans[0] = 0;
         return ans;
      }

      if (n % 2 == 0) {
         ans = fillAns(n, true);
      } else {
         ans = fillAns(n, false);
      }
      return ans;
   }

   public int[] fillAns(int n, boolean evenNum) {
      int[] ans = new int[n];
      int num = 1;
      int start = 0;

      // if n is an odd number
      if (!evenNum) {
         start = 1;
         ans[0] = 0;
      }

      for (int i = start; i < n; i++) {
         ans[i] = num;
         if (num > 0) {
            num = num * -1;
         } else {
            num = num * -1;
            num++;
         }
      }
      return ans;
   }

   // 1365. How Many Numbers Are Smaller Than the Current Number
   public int[] smallerNumbersThanCurrent(int[] nums) {
      int[] arr = nums.clone();
      Arrays.sort(arr);
      HashMap<Integer, Integer> hm = new HashMap<>();

      // when an array is sorted ASC, we can determine how many smaller numbers
      // before the current num by simply looking at its index/position.
      for (int i = 0; i < arr.length; i++) {
         // this eliminates duplicates [7,7,7], only save (7, 0).
         hm.putIfAbsent(arr[i], i);
      }

      for (int i = 0; i < nums.length; i++) {
         arr[i] = hm.get(nums[i]);
      }
      return arr;

      /*
       * int len = nums.length; int[] ans = new int[len];
       * 
       * for (int i = 0; i < len; i++) { int c = 0; for (int j = 0; j < len; j++) { if
       * (i == j) { continue; } else { if (nums[i] > nums[j]) { ans[i] = ++c; } } } }
       * return ans;
       */
   }

   // 3. Longest Substring Without Repeating Characters
   public int lengthOfLongestSubstring(String s) {
      HashMap<Character, Integer> hash = new HashMap<>();
      int start = 0;
      int end = 0;
      int maxLen = 0;
      int len = s.length();

      if (len == 0) {
         return 0;
      }

      for (int i = 0; i < len; i++) {
         char c = s.charAt(i);
         if (hash.get(c) == null) {
            hash.put(c, i);
         } else {
            start = Math.max(start, hash.get(c) + 1);
            hash.put(c, i);
         }
         end++;
         maxLen = Math.max(maxLen, end - start);
      }
      return maxLen;
   }

   // 88. Merge Sorted Array
   public void merge(int[] nums1, int m, int[] nums2, int n) {
      if (n != 0) {
         int j = 0;
         for (int i = m; i < nums1.length; i++) {
            nums1[i] = nums2[j];
            j++;
         }
         Arrays.sort(nums1);
      }
      // System.out.println(Arrays.toString(nums1));
   }

   // 141. Linked List Cycle
   public boolean hasCycle(ListNode head) {
      if (head == null)
         return false;
      ListNode fast = head; // fast will move 2 nodes at a time
      ListNode slow = head; // slow will move 1 node at a time

      // if slow and fast ever meets, then there is a cycle
      // else both will simply reach null
      while (fast != null && fast.next != null && slow != null) {
         fast = fast.next.next; // fast moves 2 nodes at a time
         slow = slow.next;
         if (fast == slow) {
            return true;
         }
      }
      // reach here only if one reach null, meaning no cycle.
      return false;
   }

   // 876. Middle of the Linked List
   public ListNode middleNode(ListNode head) {
      int len = 0, pos = 0, mid;
      ListNode clone = head;

      // get the length of the ListNode
      while (clone != null) {
         len++;
         clone = clone.next;
      }
      mid = len / 2 + 1; // get the midpoint

      // traverse until reach midpoint
      while (head != null) {
         pos++;
         if (pos == mid) {
            break; // stop at midpoint, return the ListNode
         }
         head = head.next;
      }
      return head;

      // Alternative better solution
      /* ListNode fast = head;
      ListNode slow = head;

      while (fast != null && fast.next != null) {
         fast = fast.next.next;
         slow = slow.next;
      }
      return slow; */
   }

   // 237. Delete Node in a Linked List
   public void deleteNode(ListNode node) {
      if (node.next != null) {
         node.val = node.next.val;
      }
      node.next = node.next.next;
   }

   // 203. Remove Linked List Elements
   public ListNode removeElements(ListNode head, int val) {
      if (head == null)
         return head;

      ListNode list = head; // shallow copy

      while (list.next != null) {
         if (list.next.val == val) {
            // System.out.println(head.next.val);
            list.next = list.next.next;
         } else {
            list = list.next;
         }
      }

      if (head.val == val) {
         head = head.next;
      }
      return head;
   }

   // 21. Merge Two Sorted Lists
   public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
      ListNode dummy = new ListNode(0); // 0 -> null
      ListNode l3 = dummy;

      while (l1 != null && l2 != null) {
         if (l1.val <= l2.val) {
            l3.next = l1;
            l1 = l1.next;
         } else {
            l3.next = l2;
            l2 = l2.next;
         }
         l3 = l3.next;
      }

      // copy the remaining nodes, since l1 or l2 could finish first
      if (l1 != null) {
         l3.next = l1;
      }
      if (l2 != null) {
         l3.next = l2;
      }
      return dummy.next;
   }

   // 206. Reverse Linked List
   public ListNode reverseList(ListNode head) {
      if (head == null) {
         return head;
      }

      ListNode reversed = null;
      ListNode next;

      while (head != null) {
         next = head.next; // 1st run, save 2->3->4->5. 2nd run, save 3->4->5.
         head.next = reversed; // 1st run, 1->null. 2nd run, 2->1->null.
         reversed = head; // 1st run, 1->null. 2nd run, 2->1->null.
         head = next; // 1st run, 2->3->4->5. 2nd run, 3->4->5.
      }
      return reversed;
   }

   // 104. Maximum Depth of Binary Tree
   public int maxDepth(TreeNode root) {
      if (root == null) {
         return 0;
      }

      int leftDepth = maxDepth(root.left);
      int rightDepth = maxDepth(root.right);
      int max = Math.max(leftDepth, rightDepth) + 1;

      return max;
   }

   // 226. Invert Binary Tree
   public TreeNode invertTree(TreeNode root) {
      if (root == null) { return root; }
      
      // recursion to traverse tree 
      TreeNode leftSide = invertTree(root.left);
      TreeNode rightSide = invertTree(root.right);
      
      // swap left & right
      root.left = rightSide;
      root.right = leftSide;
      
      return root;
    }

    // 704. Binary Search
    public int search(int[] nums, int target) {
       int left = 0;
       int right = nums.length - 1;
       int mid = left + (right - left) / 2;

       while (left <= right) {
          if (target == nums[mid]) {
             return mid;
          }
          if (target > nums[mid]) {
             left = mid + 1;
          } else {
             right = mid - 1;
          }
          mid = left + (right - left) / 2;
       }
       return -1;
    }

    // 1. Two Sum
    public int[] twoSum(int[] nums, int target) {
       Map<Integer, Integer> map = new HashMap<>();

       for (int i = 0; i < nums.length; i++) {
          int diff = target - nums[i];
          if (map.get(diff) != null) {
             return new int[] { i, map.get(diff) };
          }
          map.put(nums[i], i);
       }
       return new int[] { -1, -1 };
    }

    // 561. Array Partition I
    public int arrayPairSum(int[] nums) {
       // int pairs = nums.length / 2;
       int ans = 0;
       Arrays.sort(nums);

       for (int i = 0; i < nums.length; i += 2) {
          ans = ans + nums[i];
       }

       return ans;
    }

    // 167. Two Sum II - Input array is sorted
    public int[] twoSumII(int[] numbers, int target) {
        /*HashMap<Integer, Integer> map = new HashMap<>();
        int[] ans = {0,0};

        for (int i = 0; i < numbers.length; i++) {
            int diff = target - numbers[i];
            if (map.get(diff) != null && map.get(diff) != i) {
                ans[0] = map.get(diff) + 1;
                ans[1] = i + 1;
                break;
            }
            map.put(numbers[i], i);
        }
        return ans; */
        
        int left = 0;
        int right = numbers.length - 1;
        
        while (numbers[left] + numbers[right] != target) {
            if (numbers[left] + numbers[right] > target) { right--; }
            else { left++; }
        }
        return new int[] {left + 1, right + 1};
    }
}
