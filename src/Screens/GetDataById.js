import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
 
const AddObject = ({ navigation, route }) => {
  const { addNewUser } = route.params;

  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [modal, setModal] = useState('');
  const [size, setSize] = useState('');

  const saveData = () => {
    const newUser = {
      id: Date.now().toString(), 
      name,
      year,
      price,
      modal,
      size,
    };
    addNewUser(newUser); 
    navigation.goBack(); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backButtonWrapper}
        onPress={() => navigation.goBack()}>
        {/* Uncomment the Ionicons line below if you need the back button icon */}
        {/* <Ionicons
          name={'arrow-back-circle-sharp'}
          color={colors.primary}
          size={30}
        /> */}
      </TouchableOpacity>

      <Text style={styles.title}>Add Object</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter Name"
        placeholderTextColor={colors.blue}
      />

      <TextInput
        style={styles.input}
        value={year}
        onChangeText={text => setYear(text)}
        placeholder="Enter Year"
        placeholderTextColor={colors.blue}
      />

      <TextInput
        style={styles.input}
        value={price}
        onChangeText={text => setPrice(text)}
        placeholder="Enter Price"
        placeholderTextColor={colors.blue}
      />

      <TextInput
        style={styles.input}
        value={modal}
        onChangeText={text => setModal(text)}
        placeholder="Enter CPU Model"
        placeholderTextColor={colors.blue}
      />

      <TextInput
        style={styles.input}
        value={size}
        onChangeText={text => setSize(text)}
        placeholder="Enter Hard disk size"
        placeholderTextColor={colors.blue}
      />

      <Button
        mode="contained"
        onPress={saveData}
        contentStyle={styles.buttonContent}>
        Submit
      </Button>
    </ScrollView>
  );
};

export default AddObject;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  backButtonWrapper: {
    height: 35,
    width: 35,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonContent: {
    padding: 10,
  },
});


// 1724937756345