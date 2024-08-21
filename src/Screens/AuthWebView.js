import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import DeviceInfo, {getUniqueId} from 'react-native-device-info';

const PhoneAuthWebView = ({navigation}) => {
  const [deviceId, setDeviceId] = useState('');

  const userInfo = {
    iss: 'phmail',
    aud: 'user',
    country_code: '+91', 
    phone_no: '9758688308', 
  };

  // Ensure deviceId is ready before constructing the URI
  const [uri, setUri] = useState('');

  useEffect(() => {
    const fetchDeviceId = async () => {
      //const id = await getUniqueId();
     // const newUri = 'google.com';
      const newUri = `https://auth.phone.email/sign-in?countrycode=${userInfo.country_code}&phone_no=${userInfo.phone_no}&redirect_url=&auth_type=4&device=${deviceId}`;
      setUri(newUri);
    };
    fetchDeviceId();
  }, []);

  //   useEffect(() => {
  //     if (deviceId) {
  //         const newUri='google.com'
  //      // const newUri = `https://auth.phone.email/sign-in?countrycode=${userInfo.country_code}&phone_no=${userInfo.phone_no}&redirect_url=&auth_type=4&device=${deviceId}`;
  //       setUri(newUri);
  //     }
  //   }, [deviceId]);

  const handleWebViewMessage = event => {
   const encodedJWT = event.nativeEvent.data;
    navigation.navigate('Signup', {token: encodedJWT});
    console.log(encodedJWT)
  };

  if (!uri) {
    // Optionally show a loading indicator while URI is being constructed
    return null;
  }

  return (
    <WebView
      source={{uri}}
      style={{flex: 1}}
      onMessage={handleWebViewMessage}
    />
  );
};

export default PhoneAuthWebView;
