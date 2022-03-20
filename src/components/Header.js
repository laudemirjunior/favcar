import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default ({name, navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title} onPress={() => navigation.navigate('Home')}>
        Voltar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 75,
    backgroundColor: '#1E4ABB',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
    color: '#fff',
  },
});
