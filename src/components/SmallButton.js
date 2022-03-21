import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default ({children, color = true, ...rest}) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity(color)} {...rest}>
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: color => ({
    backgroundColor: color ? '#3E5FB4' : '#d60000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  }),
  textButton: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
