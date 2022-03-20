import React, {useCallback} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {formatNumber} from '../../functions/formatNumber';
import {useFocusEffect} from '@react-navigation/native';
import SmallButton from '../../components/SmallButton';
import {useCars} from '../../context/GetCars';
import {addFavorite} from '../../functions/addFavorite';

export default ({navigation}) => {
  const {getCars, cars} = useCars();

  useFocusEffect(
    useCallback(() => {
      getCars();
    }, []),
  );

  return (
    <View style={styles.view}>
      <Header name={'Todos os carros'} navigation={navigation} />
      <ScrollView>
        <View style={styles.cards}>
          {cars &&
            cars.map(item => {
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
                    <SmallButton onPress={() => addFavorite(element)}>
                      Salvar
                    </SmallButton>
                    <SmallButton
                      onPress={() =>
                        navigation.navigate('Infos', {id: item._id})
                      }>
                      Gerenciar
                    </SmallButton>
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
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
    color: '#ffffff',
  },
  cards: {
    alignItems: 'center',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    padding: 15,
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
    justifyContent: 'space-between',
  },
});
