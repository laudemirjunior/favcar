import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Button from '../../components/Button';

export default ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>FavCar</Text>
      <Text style={styles.content}>Seu próximo carro pode estar aqui.</Text>
      <Image
        style={styles.image}
        source={require('../../assets/ferrari.png')}
      />
      <Button
        children={'Começar'}
        onPress={() => navigation.navigate('Tabs')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#363636',
    color: '#ffffff',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 100,
    color: '#CCCCCC',
    fontSize: 34,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
  },
  content: {
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
});
