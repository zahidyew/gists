package com.javaSolutions;

import java.util.HashMap;

public class Solutions {

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
   
}
