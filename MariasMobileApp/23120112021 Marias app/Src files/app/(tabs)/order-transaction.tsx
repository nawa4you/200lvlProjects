



import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OrderTransaction } from '../../models/Customer'; // Assuming this path is correct
import { AppButton } from '../../app/components/AppButton'; // Reusing the button component

export default function OrderTransactionScreen() {
  const [order, setOrder] = useState<OrderTransaction>({
    orderDate: '',
    menuItemOrdered: '',
    specialInstructions: '',
    paymentMethod: '',
    nextReservationDate: '',
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>

          
          <Text style={styles.heading}>Order Transaction</Text>
          
          <Text style={styles.label}>Menu Item Ordered</Text>
          <TextInput style={styles.input} placeholder="e.g., Jollof Rice" value={order.menuItemOrdered} onChangeText={v => setOrder({ ...order, menuItemOrdered: v })} />
          
          <Text style={styles.label}>Special Instructions</Text>
          <TextInput style={[styles.input, { height: 80 }]} placeholder="Optional, e.g., Extra spicy" value={order.specialInstructions} onChangeText={v => setOrder({ ...order, specialInstructions: v })} />

          <Text style={styles.label}>Payment Method</Text>
          <TextInput style={styles.input} placeholder="Cash, Card, Transfer, Other" value={order.paymentMethod} onChangeText={v => setOrder({ ...order, paymentMethod: v })} />
        
          <Text style={styles.label}>Order Date</Text>
          <TextInput style={styles.input} placeholder="DD/MM/YYYY  (4/10/2004)" value={order.orderDate} onChangeText={v => setOrder({ ...order, orderDate: v })} />
          
          
          <Text style={styles.label}>Next reservation date</Text>
          <TextInput style={styles.input} placeholder="DD/MM/YYYY  (4/10/2004)" value={order.nextReservationDate} onChangeText={v => setOrder({ ...order, nextReservationDate: v })} />
        
          <AppButton title="Save Order" onPress={() => console.log(order)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// identical to the profile screen for consistency
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  scrollContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  heading: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#d94a3c', 
    marginBottom: 24, 
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 8,
    padding: 12, 
    marginBottom: 20,
    backgroundColor: '#fdfdfd',
    fontSize: 16,
  },
});

