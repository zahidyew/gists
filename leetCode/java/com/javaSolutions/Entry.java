package com.javaSolutions;

import com.javaSolutions.parkinglot.ParkingLot;
import com.javaSolutions.parkinglot.Vehicle;

public class Entry {   
   public static void main(String[] args) {
      /* int[] elems = { 3, 2, 3 };
      int majorityElement = Solutions.majorityElement(elems); */
      /* int[] nums = {1,1,0,1,1,1};
      int maxConsecutiveOnes = LeetcodeQues.findMaxConsecutiveOnes(nums);

      System.out.println("Answer is: " + maxConsecutiveOnes); */

      ParkingLot parkingLot = new ParkingLot();
      Vehicle car = new Vehicle("car");
      Vehicle truck = new Vehicle("truck");
      Vehicle motorcycle = new Vehicle("motorcycle");
      String[] slotSizes = {"small", "small", "large", "small", "small"};
      parkingLot.createSlots(5, slotSizes);
      parkingLot.park(car, 1);
      parkingLot.park(car, 2);
      parkingLot.park(motorcycle, 3);
      parkingLot.park(car, 4);
      parkingLot.unpark(3);

      System.out.println("Vehicle can park: " + parkingLot.park(motorcycle, 3));
   }
}