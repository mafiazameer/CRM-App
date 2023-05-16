import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Alert,Image,Button} from "react-native";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import * as Yup from 'yup';
import { Formik } from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState("");
  const [numOfEmployees, setNumOfEmployees] = useState("");
  const [phone, setPhone] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [agree, setAgree] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Enter confirmPassword'),
    phone: Yup.string().required('Phone is required'),
    company: Yup.string().required('Company name required'),
  });

  const handleSubmit = async (values) => {
    console.log('Fetch Api Cal');
    const token = await AsyncStorage.getItem('userToken');
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Tenant': 'root',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        username: "",
        jobTitle: "developer",
        company: values.company,
        phoneNumber: values.phone,
        country: "",
        baseUrl:"http://api-crm.belsio.online:5001/",
      })
    };
    fetch("http://api-crm.belsio.online:5001/api/v1/users/register", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetch API Response', json);
        AsyncStorage.setItem('userToken', json.token)
          .then(() => {
            navigation.navigate('LoginScreen');
          })
          .catch((error) => {
            console.error('AsyncStorage Error', error);
          });
      });
  };
  const submit = (values) => {
    Alert.alert(`Thank you ${values.firstName} ${values.lastName} for your submission!`);
    
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../image/logo.png")} style={styles.logo} />
      <Text style={styles.heading}> Signup now to start</Text>
      <Text style={styles.textstyles}>
        Continue with Google to enter your details
      </Text>
      <TouchableOpacity style={styles.googlebutton}>
        <Image source={require("../image/google.png")} style={styles.googleicon} />
        <Text style={{ fontSize: 12 }}>Log in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Appleebutton}>
        <Image source={require("../image/apple.png")} style={styles.Appleleicon} />
        <Text style={{ fontSize: 12 }}>Log in with Apple</Text>
      </TouchableOpacity>
      <Formik
        initialValues={{firstName:'', lastName:'', email: '',password:'',confirmPassword:'',Phone:'' ,company:'' }}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({ handleChange, handleBlur, handleSubmit,
          values, errors }) => (
    <View>
      <TextInput
        style={[styles.firstNamestyle, errors.firstName && styles.errorInput]}
        placeholder="First Name"
        onChangeText={handleChange('firstName')}
        onBlur={handleBlur('firstName')}
        value={values.firstName}
      />
       
        <TextInput
        style={[styles.lasttNamestyle, errors.firstName && styles.errorInput]}
        placeholder="Last Name"
        onChangeText={handleChange('lastName')}
        onBlur={handleBlur('LastName')}
        value={values.lastName}
      />
      <TextInput
      style={[styles.EmailtNamestyle, errors.email && styles.errorInput]}
        placeholder="Email"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
      />
      <TextInput
      style={[styles.passwordstyle, errors.password && styles.errorInput]}
      placeholder="Password"
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
      secureTextEntry={true}
      />

    <TextInput
      style={[styles.confirmpasswordstyle, errors.confirmPassword && styles.errorInput]}
      placeholder="Confirm Password"
      onChangeText={handleChange('confirmPassword')}
      onBlur={handleBlur('confirmPassword')}
      value={values.confirmPassword}
      secureTextEntry={true}
/>
      <TextInput
        style={[styles.CompanytNamestyle, errors.company && styles.errorInput]}
        placeholder="company"
        onChangeText={handleChange('company')}
        onBlur={handleBlur('company')}
        value={values.company}
      />
        <TextInput
        style={[styles.phonestyle, errors.phone && styles.errorInput]}
        placeholder="Phone"
        onChangeText={handleChange('phone')}
        onBlur={handleBlur('phone')}
        value={values.phone}
      />

        <View style={styles.pickerWrapper}>
      <Text style={styles.pickerLabel}></Text>
        <Picker
          style={styles.picker}
          selectedValue={countryRegion}
          onValueChange={(value) => setCountryRegion(value)}>
          <Picker.Item label="Country/Region" value="" />
          <Picker.Item label="North America" value="North America" />
          <Picker.Item label="South America" value="South America" />
          <Picker.Item label="Europe" value="Europe" />
          <Picker.Item label="Asia" value="Asia" />
          <Picker.Item label="Australia" value="Australia" />
          <Picker.Item label="Africa" value="Africa"/>
          <Picker.Item label="Antarctica" value="Antarctica" />
          <Picker.Item label="Arctic" value="Arctic" />
          <Picker.Item label="Middle East" value="Middle East" />
          <Picker.Item label="Caribbean" value="Caribbean" />
          <Picker.Item label="Central America" value="Central America" />
          <Picker.Item label="Pakistan" value="Pakistan" />
          <Picker.Item label="Poland" value="Poland" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="Iraq" value="	Iraq" />
          <Picker.Item label="China" value="China" />
          <Picker.Item label="Afghanistan" value="	Afghanistan" />
          <Picker.Item label="Egypt" value="	Egypt" />
          </Picker>
          </View>
          <View style={styles.wrapper}>
          <Checkbox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? "#0090D8" : undefined}
          />
          <Text style={styles.wrapperText}>
            I agree to the services Argument
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: agree ? "#0090D8" : "grey",
            },
          ]}
          disabled={!agree}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}> Sign up</Text>
        </TouchableOpacity>
    </View>
  )}
    </Formik>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
      },
      logo: {
        alignContent:"center",
        width: 90,
        height: 75,
        marginTop:50,
        marginLeft:130,
        alignItems: 'center',
      },
      heading:{
        fontSize:16,
        marginLeft:100,
        flexDirection: "row",
        alignItems: "center",
        fontWeight:'bold',
        marginTop:10,
      },
      textstyles:{
        marginLeft:30,
        marginRight:30,
        flexDirection: "row",
        alignItems: "center",
        marginTop:20,
        marginBottom:10,
        marginLeft:50,
        marginRight:20,
      },
       googlebutton:{
       flexDirection: 'row', 
       alignItems: 'center', 
       paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5, 
      marginBottom: 10, 
      borderRadius: 5,
      borderColor: "#ccc",
      padding: 10,
      alignItems: 'center',
      marginTop: 10,
      borderWidth:1,
      height:40,
      width:160,
      marginLeft:10,
      marginRight:200,
      },
      googleicon:{
        height:12,
        width:10,
        marginRight:5,
      },
      Appleebutton:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5, 
        marginBottom: 10, 
        borderRadius: 5,
        borderColor: "#ccc",
        padding: 10,
        alignItems: 'center',
        borderWidth:1,
        height:40,
        width:160,
        marginLeft:180,
        marginRight:30,
        marginTop:-50,
      },
      Appleleicon:{
        height:12,
        width:10,
        marginRight:5,
      },
       buttonStyle: {
       borderRadius: 5,
       paddingVertical: 10,
       paddingHorizontal: 18,
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       marginVertical: 30,
    },
    buttonText: {
      color: "#eee",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      marginTop: 30,
    },
    wrapperText: {
      marginLeft: 10,
      color: "#7d7d7d",
    },
    firstNamestyle:{
        borderRadius: 1,
        padding: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        width:150,
        marginLeft:5,
    },
    lasttNamestyle:{
        borderRadius: 1,
        padding: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        width:150,
        marginLeft:190,
        marginTop:-69,
    },
    phonestyle:{
      borderRadius: 1,
      padding: 10,
      marginBottom: 20,
      borderBottomWidth: 1,
      marginLeft:5,
      marginRight:10,
      width:150,
      marginLeft:190,
      marginTop:-68,
  },
  confirmpasswordstyle:{
      borderRadius: 1,
      padding: 10,
      marginBottom: 20,
      borderBottomWidth: 1,
      width:150,
      marginLeft:190,
      marginTop:-70,
      marginRight:15,
}, 
    EmailtNamestyle:{
        borderRadius: 1,
        padding: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        marginLeft:5,
        marginRight:10,
        marginTop:-20,
    },
    CompanytNamestyle:{
        borderRadius: 1,
        padding: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        width:150,
        marginLeft:5,
    },
    
    Numberttyle:{
        borderRadius: 1,
        padding: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        width:150,
        marginLeft:190,
        marginTop:-69,
    },
   
    picker:{
        borderRadius: 1,
        marginTop:-50,
        marginLeft:5,
        marginRight:10, 
    },
    pickerLabel:{
        borderBottomWidth: 1,
        marginTop:10,
        marginLeft:5,
        marginRight:15,
    },
    errorInput: {
      borderColor: 'red',
    },
  passwordstyle:{
    borderRadius: 1,
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    marginTop:-10,
    marginLeft:5,
    width:150,
},
  });
  
  export default SignupScreen;