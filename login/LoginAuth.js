import React, { useState ,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  Alert
} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import apiActionCreator from './../actions/ApiActionCreator';
const LoginAuth = ({navigation}) => {
  const logoImage = require('./../assets/ic_launcher.png');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const dispatch = useDispatch();
  const emailValidateResponse = useSelector((state) => state.apiReducer.data);
  const signInResponse = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);
  //useEffect(() => {
   // Alert.alert("---",JSON.stringify(data));
    //Alert.alert("---",loading);
 // }, [data]);


  checkUserExist = async () => {
    if(email!="")
    {
      setLoadingSpinner(true);
       dispatch(await apiActionCreator('https://jsonplaceholder.typicode.com/posts'));
       if(emailValidateResponse.length>0)
       {
        setLoadingSpinner(false);
       }
       else
       {
        setLoadingSpinner(false);
       }
    }
      
};
signInFn = async() => {
  if(email!="" && password!="")
  {
    setLoadingSpinner(true);
     dispatch(await apiActionCreator('https://jsonplaceholder.typicode.com/posts'));
     if(signInResponse.length>0)
     {
      setLoadingSpinner(false);
      navigation.replace('DrawerNavigationRoutes');
     }
     else
     {
      setLoadingSpinner(false);
     }
  }
};
  return (
    <View style={styles.container}>
      <Spinner
          //visibility of Overlay Loading Spinner
          visible={loading}
          //Text with the Spinner
          color="red"
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
    <Image source={logoImage} style={styles.image} /> 
<StatusBar backgroundColor="white" barStyle="dark-content" />
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Email"

      placeholderTextColor="#003f5c"
      onChangeText={(email) => setEmail(email)}
    /> 
  </View> 
 {
  emailValidateResponse.length > 0 &&
    <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Password"
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(password) => setPassword(password)}
    /> 
</View>}
 {/* <TouchableOpacity>
    <Text style={styles.forgot_button}>Forgot Password?</Text> 
  </TouchableOpacity> */}


{
  emailValidateResponse.length == 0 &&
  <TouchableOpacity style={styles.loginBtn} onPress={() => checkUserExist()}>
  <Text style={styles.textColor} >Next</Text> 
</TouchableOpacity> }

{
  emailValidateResponse.length> 0 &&
  <TouchableOpacity style={styles.loginBtn} onPress={() => signInFn()}>
  <Text style={styles.textColor} >Sign In</Text> 
</TouchableOpacity> }
  
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#15152d',
   },
   image :{
    marginBottom: 40
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 20,
    width: "75%",
    height: 45,
    marginBottom: 20,
    //alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:"#000"
  },
  textColor:
  {
    color:"#fff"
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"#fff"
  },
  loginBtn: {
    width: "75%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    backgroundColor: "#FF1493",
  },
});

export default LoginAuth;