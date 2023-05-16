import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const FormScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [account, setAccount] = useState('');
  const [work, setWork] = useState('');
  const [mobile, setMobile] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const [whatsappStatus, setWhatsappStatus] = useState('');
  const [smsStatus, setSmsStatus] = useState('');
  const [Lead, setLead] = useState('');

  const handleFormSubmit = () => {
    // Handle form submission
  };
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerText}>Add Contact</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
           <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            value={firstName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={firstName}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Account"
            value={firstName}
            onChangeText={setAccount }
          />
          <TextInput
            style={styles.input}
            placeholder="Work"
            value={firstName}
            onChangeText={setWork}
          />
          <TextInput
            style={styles.input}
            placeholder="setWhatsappStatus"
            value={firstName}
            onChangeText={setWhatsappStatus}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            value={firstName}
            onChangeText={setMobile}
          />
          <TextInput
            style={styles.input}
            placeholder="SmsStatus"
            value={firstName}
            onChangeText={setSmsStatus}
          /> 
          <TextInput
            style={styles.input}
            placeholder="SubscriptionStatus"
            value={firstName}
            onChangeText={setSubscriptionStatus}
          />
          <TextInput
            style={styles.input}
            placeholder="Lead"
            value={firstName}
            onChangeText={setLead}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={setFirstName}
          /><TextInput
          style={styles.input}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={setFirstName}
          />

          {/* Rest of the form fields */}
          
          <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'grey',
    marginTop:50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    height:40,
    backgroundColor: 'lightblue',
  },
  input: {
    marginTop:10,
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FormScreen;
