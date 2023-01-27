import React from "react";
import {
  StyleSheet
} from "react-native";
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Storage} from './store/Storage';
import  LoginAuth  from "./login/LoginAuth";
import DrawerNavigationRoutes from './Pages/DrawerNavigationRoutes';
import  DashboardComponent  from "./Pages/Dashboard/DashboardComponent";



const Stack = createNativeStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginAuth}
        options={{headerShown: false}}
      />
     {/* <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />*/}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
    <GestureHandlerRootView  style={{ flex: 1 }}>
    <Provider store={Storage}>
    {/*<LoginAuth />*/}
   {/* <DashboardComponent />*/}

   <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {/* SplashScreen which will come once for 5 Seconds */}
        {/*<Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
  />*/}
        {/* Auth Navigator which includer Login Signup will come once */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer as we will use our custom header
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>
    </GestureHandlerRootView>
   </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#15152d',
  }
  });