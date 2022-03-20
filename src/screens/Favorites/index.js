import React, {useState, useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import {formatNumber} from '../../functions/formatNumber';
import SmallButton from '../../components/SmallButton';

export default ({navigation}) => {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    setCars(JSON.parse((await AsyncStorage.getItem('cars')) || []));
  };

  useFocusEffect(
    useCallback(() => {
      getCars();
    }, []),
  );

  const remove = async data => {
    const newCars = cars.filter((_, index) => index !== data);
    await AsyncStorage.setItem('cars', JSON.stringify(newCars));
    getCars();
  };

  return (
    <View>
      <Header name={'Meus favoritos'} navigation={navigation} />
      <View style={styles.cards}>
        {cars.length > 0 ? (
          cars.map((item, index) => {
            return (
              <View style={styles.card}>
                <View>
                  <View style={styles.texts}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.age}>{item.age}</Text>
                  </View>
                  <Text style={styles.brand}>{item.brand}</Text>
                  <Text style={styles.price}>
                    R$ {formatNumber(item.price)}
                  </Text>
                </View>
                <View style={styles.buttons}>
                  <SmallButton color={false} onPress={() => remove(item)}>
                    Excluir
                  </SmallButton>
                </View>
              </View>
            );
          })
        ) : (
          <View style={styles.view}>
            <Text style={styles.text}>Ainda não há carros salvos</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  cards: {
    alignItems: 'center',
    marginBottom: 75,
    marginTop: 5,
    marginBottom: 5,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: '90%',
    height: 100,
    margin: 5,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    padding: 10,
  },
  texts: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: '#1E4ABB',
  },
  brand: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
  },
  age: {
    fontSize: 14,
  },
  buttons: {
    justifyContent: 'center',
  },
  touchableOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E4ABB',
    width: 100,
    height: 30,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
