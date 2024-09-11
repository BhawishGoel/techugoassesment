import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/HomeScreen';
import Login from './src/Screens/LoginScreen';
import Signup from './src/Screens/SignupScreen';
import SplashScreen from './src/Screens/OnboardingScreen';
import PhoneAuthWebView from './src/Screens/AuthWebView';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import UserProfile from './src/Screens/UserProfile';
import GetData from './src/Screens/GetData';
import GetDataById from './src/Screens/GetDataById';
import DeleteUser from './src/Screens/DeleteUser';
import Relax from './src/Screens/Relax';
import DisplayInfo from './src/Screens/DisplayInfo';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="PhoneAuthWebView" component={PhoneAuthWebView} />
          <Stack.Screen name="GetData" component={GetData} />
          <Stack.Screen name="GetDataById" component={GetDataById} />
          <Stack.Screen name="DeleteUser" component={DeleteUser} />
          <Stack.Screen name="Relax" component={Relax} />
          <Stack.Screen name="DisplayInfo" component={DisplayInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
