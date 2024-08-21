import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Background from '../Components/Background/Background';
import Btn from '../Components/Button/Btn';
import {darkGreen, green} from '../Constants/Constants';
import {WebView} from 'react-native-webview';

const DemoWebView = () => {
  return (
    <WebView
      source={{
        url: 'https://www.phone.email/login-with-phone-react-native-docs#tocID1',
      }}
    />
  );
};

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'white', fontSize: 64}}>Welcome to</Text>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            marginBottom: 40,
            marginLeft: 0,
          }}>
          Techugo
        </Text>

        <Btn
          bgcolor={green}
          textcolor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgcolor="white"
          textcolor={darkGreen}
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({});
