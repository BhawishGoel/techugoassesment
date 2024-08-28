import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';

const DeleteUser = ({navigation, route}) => {
  const {deleteUser} = route.params; // Function passed from GetData.js
  const [userId, setUserId] = useState('');

  const handleDelete = () => {
    deleteUser(userId); // Call the delete function
    navigation.goBack(); // Go back to GetData.js
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButtonWrapper}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name={'arrow-back-circle-sharp'}
          color={colors.primary}
          size={30}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Delete User</Text>

      <TextInput
        style={styles.input}
        value={userId}
        onChangeText={text => setUserId(text)}
        placeholder="Enter User ID"
        placeholderTextColor={colors.secondary}
      />

      <Button
        mode="contained"
        onPress={handleDelete}
        contentStyle={styles.buttonContent}>
        Delete
      </Button>
    </View>
  );
};

export default DeleteUser;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonContent: {
    height: 40,
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
});
