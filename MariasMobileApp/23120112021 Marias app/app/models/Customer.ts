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
}

export interface OrderTransaction {
  orderDate: string; // Renamed to reflect PDF's "Order date"
  menuItemOrdered: string; // Renamed to reflect PDF's "Menu item ordered"
  specialInstructions?: string; // Optional
  paymentMethod: string;
  nextReservationDate?: string; // Optional, using string for simplicity
}