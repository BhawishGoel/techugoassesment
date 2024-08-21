import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CustomCheckbox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity onPress={onCheck} style={styles.container}>
      <View style={[styles.box, checked && styles.checkedBox]}>
        {checked && <View style={styles.checkmark} />}
      </View>
      <Text style={styles.label}></Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40, 
    marginLeft: 40,
    borderRadius:10 
  },
  checkedBox: {
    backgroundColor: 'darkGreen',
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  label: {
    color: 'grey',
    fontSize: 16,
  },
});

export default CustomCheckbox;
