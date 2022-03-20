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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color ? '#d60000' : '#1E4ABB',
    width: '90%',
    height: 45,
    borderRadius: 10,
    margin: 5,
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
    fontSize: 20,
    fontWeight: '500',
  },
});
