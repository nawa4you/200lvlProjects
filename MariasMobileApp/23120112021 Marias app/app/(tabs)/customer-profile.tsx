import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomerProfile } from '../../models/Customer';
import { AppButton } from '../../app/components/AppButton'; 

export default function CustomerProfileScreen() {
  const [profile, setProfile] = useState<CustomerProfile>({ 
    firstName: '',
    surname: '',
    middleName: '',
    dateOfBirth: '',
    homeAddress: '',
    dateOfRegistration: '',
    matriculationNumberIsWriter: false, //question for checkbox
    _23120112021: false, //checkbox
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.heading}>Customer Profile</Text>

          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input} placeholder="e.g., John" value={profile.firstName} onChangeText={v => setProfile({ ...profile, firstName: v })} />

          <Text style={styles.label}>Surname</Text>
          <TextInput style={styles.input} placeholder="e.g., Doe" value={profile.surname} onChangeText={v => setProfile({ ...profile, surname: v })} />

          <Text style={styles.label}>Middle name (optional)</Text>
          <TextInput style={styles.input} placeholder="e.g., Liam" value={profile.middleName} onChangeText={v => setProfile({ ...profile, middleName: v })} />

          <Text style={styles.label}>Date of Birth (YYYY-MM-DD)</Text>
          <TextInput style={styles.input} placeholder="DD/MM/YYYY   (04/10/2004)" value={profile.dateOfBirth} onChangeText={v => setProfile({ ...profile, dateOfBirth: v })} keyboardType="numeric" />

          <Text style={styles.label}>Home Address</Text>
          <TextInput style={[styles.input, { height: 80 }]} placeholder="e.g., 123 Main St, City" value={profile.homeAddress} onChangeText={v => setProfile({ ...profile, homeAddress: v })} multiline numberOfLines={2} />
          
          <Text style={styles.label}>Date of Registration (YYYY-MM-DD)</Text>
          <TextInput style={styles.input} placeholder="MM/YYYY   (04/2004)" value={profile.dateOfRegistration} onChangeText={v => setProfile({ ...profile, dateOfRegistration: v })} keyboardType="numeric" />

          <Text style={styles.label}>Dev? </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <Switch
              value={profile._23120112021}
              onValueChange={v => setProfile({ ...profile, _23120112021: v })}
            />
            <Text style={{ marginLeft: 10 }}>{profile._23120112021 ? '_23120112021' : ''}</Text>
          </View>

          <AppButton title="Save Profile" onPress={() => console.log(profile)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

//the styling for the component
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
