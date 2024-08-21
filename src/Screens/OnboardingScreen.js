import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {darkGreen} from '../Constants/Constants';

const OnboardingScreen = props => {
  const {navigation} = props;

  useEffect(() => {
    // Navigate to Home screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Techugo - App Development Company</Text>
      <Text style={styles.subtitle}>
        Get started by creating an account or logging in.
      </Text>

      <ActivityIndicator size="large" color="black" style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkGreen,
    padding: 20,
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 40,
  },

  loader: {
    marginBottom: 20,
  },
});

export default OnboardingScreen;
