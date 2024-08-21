import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/HomeScreen';
import Login from './src/Screens/LoginScreen';
import Signup from './src/Screens/SignupScreen';
import SplashScreen from './src/Screens/OnboardingScreen';
import PhoneAuthWebView from './src/Screens/AuthWebView';
 
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PhoneAuthWebView" component={PhoneAuthWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
