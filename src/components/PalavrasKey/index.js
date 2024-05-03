import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomKeyboard = ({ onKeyPress }) => {
  // Letras do teclado para exemplo
  const keys = ['A', 'B', 'C', '1', '2', '3'];

  return (
    <View style={styles.keyboard}>
      {keys.map(key => (
        <TouchableOpacity key={key} style={styles.key} onPress={() => onKeyPress(key)}>
          <Text style={styles.keyText}>{key}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#EEE',
  },
  key: {
    margin: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
    borderRadius: 5,
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default CustomKeyboard;
