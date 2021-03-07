package com.javaSolutions.parkinglot;

public class Slot {
   private String slotSize; // slotSize can be small or large
   private boolean isOccupied = false;

   public Slot(String slotSize) {
      this.slotSize = slotSize;
   }

   /*
    * public String getSlotSize() { return slotSize; }
    */

   public boolean isOccupied() {
      return isOccupied;
   }

   public void setIsOccupied(boolean isOccupied) {
      this.isOccupied = isOccupied;
   }

   /*
    * Rules are: 1) Truck parks only in large slot 2) Car parks only in small slot
    * 3) Motor can park in either slot
    */
   public boolean canFit(String type) {
      if (type.equals("motorcycle")) {
         return true;
      } else if (slotSize.equals("small") && type.equals("car")) {
         return true;
      } else if (slotSize.equals("large") && type.equals("truck")) {
         return true;
      } else {
         return false;
      }
   }
}
