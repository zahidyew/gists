package com.javaSolutions.parkinglot;

public class Vehicle {
   private String type; // type can be: car, truck or motorcycle

   public Vehicle(String type) {
      this.type = type;
   }

   public String getType() {
      return type;
   }
}
