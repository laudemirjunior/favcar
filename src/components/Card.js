import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {addFavorite} from '../functions/addFavorite';
import {formatNumber} from '../functions/formatNumber';
import SmallButton from './SmallButton';

export default ({navigation, item}) => {
  return (
    <View style={styles.view}>
      <View>
        <View style={styles.texts}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.age}>{item.age}</Text>
        </View>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>R$ {formatNumber(item.price)}</Text>
      </View>
      <View style={styles.buttons}>
        <SmallButton onPress={() => addFavorite(item)}>Salvar</SmallButton>
        <SmallButton
          onPress={() => navigation.navigate('Infos', {id: item._id})}>
          Gerenciar
        </SmallButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    width: 180,
    height: 115,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    justifyContent: 'space-between',
  },
  texts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  title: {
    fontSize: 20,
    color: '#1E4ABB',
  },
  brand: {
    fontSize: 16,
  },
  age: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
