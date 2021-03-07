package com.javaSolutions.parkinglot;

import java.util.HashMap;

public class ParkingLot {
   private int capacity, total = 0;
   private HashMap<Integer, Slot> slots = new HashMap<>();

   public boolean isFull() {
      if (total == capacity) { return true; }
      return false;
   }

   // create parking slots first, before calling park() & unpark()
   public void createSlots(int capacity, String[] slotSizes) {
      this.capacity = capacity;

      for (int i = 1; i <= capacity; i++) {
         Slot newSlot = new Slot(slotSizes[i - 1]);
         slots.put(i, newSlot);
      }
   }

   public boolean park(Vehicle vehicle, int lotNumber) {
      // handle out of bounds & possible nullPointerExceptions
      if (lotNumber < 1 || lotNumber > capacity) { return false; }
      if (isFull()) { return false; }

      Slot currentSlot = slots.get(lotNumber);
      if (!currentSlot.isOccupied() && currentSlot.canFit(vehicle.getType())) {
         currentSlot.setIsOccupied(true);
         total++;
         return true;
      } else {
         return false;
      }
   }

   // exit the parking lot
   public void unpark(int lotNumber) {
      // handle out of bounds & possible nullPointerExceptions
      if (lotNumber < 1 || lotNumber > capacity) { System.out.println("Out of bounds"); return;}
      Slot currentSlot = slots.get(lotNumber);
      currentSlot.setIsOccupied(false);
      total--;
   }
}
