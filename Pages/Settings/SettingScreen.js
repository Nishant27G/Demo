// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React,{useState} from 'react';
import {View, Text, SafeAreaView,Linking,StyleSheet,TouchableOpacity,Alert,Button, Platform} from 'react-native';
//import InAppBrowser from 'react-native-inappbrowser-reborn';
import * as WebBrowser from 'expo-web-browser';

// okta
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
    //okta login
    WebBrowser.maybeCompleteAuthSession();

    const useProxy = Platform.select({ web: false, default: true });
//okta end
//okta end

const SettingsScreen = () => {

  const discovery = useAutoDiscovery('https://auth.expo.io/@anonymous/loginDemo-58a222b4-5d06-48fb-ac25-74a24b685372');
  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '0oa3ypz0q1OYSKSAr697',
      scopes: ['openid', 'profile'],
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'com.okta.cloudsmartz:/callback',
        useProxy,
      }),
    },
    discovery
  );

  /*sendToAnotherUrl =  () => {
    Linking.openURL('https://aboutreact.com');
  }*/
  const [result, setResult] = useState(null);
  
   sendToAnotherUrl = async() => {

    //expo browser  code
   /* let result = await WebBrowser.openBrowserAsync('https://aboutreact.com');
    setResult(result);*/

    //in app browser react native code
   /* try {
      const url = 'https://aboutreact.com'
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'overFullScreen',
          modalTransitionStyle: 'partialCurl',
          modalEnabled: true,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right'
          },
          headers: {
            'my-custom-header': 'my custom header value'
          },
          waitForRedirectDelay: 0
        })
        Alert.alert(JSON.stringify(result))
      }
      else Linking.openURL(url)
    } catch (error) {
      Alert.alert(error.message)
    }*/
  }

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);

  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example of Splash, Login and Sign Up in React Native
            {'\n\n'}
            This is the Settings Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
        <TouchableOpacity style={styles.loginBtn} onPress={() => sendToAnotherUrl()}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
        
        </TouchableOpacity>
        <Text>{result && JSON.stringify(result)}</Text>

        <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync({ useProxy });
      }}
    />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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

export default SettingsScreen;
