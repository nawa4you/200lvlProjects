// This file defines the TypeScript interfaces for customer profiles and order transactions.

// models/Customer.ts
export interface CustomerProfile {
  firstName: string;
  surname: string;
  middleName?: string; // Optional as per common practice
  dateOfBirth: string; // Using string for simplicity, can be Date object
  homeAddress: string;
  dateOfRegistration: string; // Using string for simplicity, can be Date object
  matriculationNumberIsWriter: boolean; // Renamed to reflect boolean nature
  _23120112021: boolean; // Checkbox for software writer's matriculation number
}

export interface OrderTransaction {
  orderDate: string; 
  menuItemOrdered: string; 
  specialInstructions?: string;
  paymentMethod: string;
  nextReservationDate?: string;
}