


import React from 'react';
import { Tabs } from 'expo-router';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Imported the icon library for visually appealing icons

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#d94a3c', // Changed the active tab color to match the primary color
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0, elevation: 10 },
      }}
    >
      <Tabs.Screen
        name="customer-profile"
        options={{
          title: 'Profile',
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Image source={require('../../assets/logo.png')} style={styles.headerLogo} />
            </View>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'people' : 'person-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="order-transaction"
        options={{
          title: 'Order',
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Image source={require('../../assets/logo.png')} style={styles.headerLogo} />
            </View>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'receipt' : 'receipt-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 200,//did this to centre the logo

  },
  headerLogo: {
    width: 200,
    height: 50,
    marginRight: 10,

    

  }
});
