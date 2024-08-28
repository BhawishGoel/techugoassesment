import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../redux/slices/userSlice';
import {Button} from 'react-native-paper';

const GetData = ({navigation}) => {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector(state => state.users);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [localUsers, setLocalUsers] = useState(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setLocalUsers(users);
  }, [users]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const toggleUserDetails = userId => {
    setSelectedUserId(prevUserId => (prevUserId === userId ? null : userId));
  };

  const showInnerData = data => {
    return Object.entries(data).map(([key, value]) => (
      <View key={key} style={styles.detailItem}>
        <Text style={styles.detailText}>
          {key}: {value?.toString() ?? 'Not Defined'}
        </Text>
      </View>
    ));
  };

  const addNewUser = newUser => {
    setLocalUsers([...localUsers, newUser]);
  };

  const deleteUser = userId => {
    setLocalUsers(localUsers.filter(user => user.id !== userId));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get User Data - {localUsers.length}</Text>
      <View>
        {localUsers.map(item => (
          <View key={item.id}>
            <Text
              style={styles.bigblue}
              onPress={() => toggleUserDetails(item.id)}>
              ID: {item.id} - Name: {item.name}
            </Text>
            {selectedUserId === item.id && (
              <View style={styles.details}>
                <Text>More Details:</Text>
                {showInnerData(item)}
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.buttonGroup}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('GetDataById', {addNewUser})}
          style={styles.button}
          contentStyle={styles.buttonContent}>
          Add
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('DeleteUser', {deleteUser})}
          style={styles.button}
          contentStyle={styles.buttonContent}>
          Delete
        </Button>
      </View>
    </ScrollView>
  );
};

export default GetData;

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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  details: {
    marginTop: 10,
    paddingLeft: 10,
    borderLeftColor: 'gray',
    borderLeftWidth: 2,
  },
  detailItem: {
    marginVertical: 3,
  },
  detailText: {
    fontSize: 16,
    color: 'black',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: 90,
  },
  buttonContent: {
    height: 40,
  },
});

