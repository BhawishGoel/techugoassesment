import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Btn from '../Components/Button/Btn';
import {green} from '../Constants/Constants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {userData} from '../Constants/db';

const UserProfile = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <View>
        {userData.map((person, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.item}>First Name: {person.firstName}</Text>
            <Text style={styles.item}>Last Name: {person.lastName}</Text>
            <Text style={styles.item}>Email: {person.email}</Text>
            <Text style={styles.item}>Mobile: {person.mobile}</Text>
            <Text style={styles.item}>Password: {person.password}</Text>
          </View>
        ))}
        <Btn
          style={{justifyContent: 'center'}}
          bgcolor={green}
          textcolor="white"
          btnLabel="Get Data"
          Press={() => navigation.navigate('GetData')}
        />
        <Btn
          style={{justifyContent: 'center'}}
          bgcolor={green}
          textcolor="white"
          btnLabel="Logout"
          Press={handleLogout}
        />
        <Btn
          style={{justifyContent: 'center'}}
          bgcolor={green}
          textcolor="white"
          btnLabel="Relax"
          Press={() => navigation.navigate('Relax')}
        />
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 20,
  },
  item: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
});
