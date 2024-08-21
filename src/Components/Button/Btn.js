import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Btn({bgcolor, btnLabel, textcolor, Press}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgcolor,
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
        paddingVertical: 5,
        marginVertical: 10
      }}>
      <Text style={{color: textcolor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}

