package com.javaSolutions;

public class Entry {   
   public static void main(String[] args) {
      /* int[] elems = { 3, 2, 3 };
      int majorityElement = Solutions.majorityElement(elems); */
      int[] nums = {1,1,0,1,1,1};
      int maxConsecutiveOnes = LeetcodeQues.findMaxConsecutiveOnes(nums);

      System.out.println("Answer is: " + maxConsecutiveOnes);
   }
}