import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useCallback} from 'react';
import {View, SafeAreaView, TextInput, StyleSheet, Text} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {formatNumber} from '../../functions/formatNumber';
import {newToast} from '../../functions/newToast';
import api from '../../services';

export default ({navigation, route}) => {
  const [car, setCar] = useState({});
  const {id} = route.params;
  console.log(id);

  const getCar = () => {
    api.get(`/cars/${id}`).then(response => {
      setCar(response.data);
    });
  };

  const deleteCar = () => {
    api.delete(`/cars/${id}`).then(response => {
      setCar(response.data);
      navigation.navigate('All');
      newToast('Carro excluído');
    });
  };

  const patchCar = () => {
    if (car.title.length < 1) {
      return newToast('Preencha o modelo corretamente');
    }
    if (car.brand.length < 1) {
      return newToast('Preencha o marca corretamente');
    }
    if (car.price.length <= 3) {
      return newToast('Preencha o preço corretamente');
    }
    if (String(car.age).length !== 4) {
      return newToast('Preencha o ano corretamente');
    } else {
      api.put(`/cars/${id}`, car).then(response => {
        setCar(response.data);
        newToast('Carro editado');
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      getCar();
    }, []),
  );

  return (
    <View>
      <Header name={'Gerenciar carro'} navigation={navigation} />
      <View style={styles.cards}>
        <View style={styles.card}>
          <View>
            <View style={styles.texts}>
              <Text style={styles.title}>{car.title}</Text>
              <Text style={styles.age}>{car.age}</Text>
            </View>
            <Text style={styles.brand}>{car.brand}</Text>
            <Text style={styles.price}>R$ {formatNumber(car.price)}</Text>
          </View>
        </View>
      </View>
      <SafeAreaView style={styles.area}>
        <TextInput
          style={styles.input}
          onChangeText={e => setCar(car => ({...car, title: e}))}
          placeholder="Digite o modelo"
          value={car.title}
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setCar(car => ({...car, brand: e}))}
          value={car.brand}
          placeholder="Digite a marca"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setCar(car => ({...car, price: e}))}
          value={car.price}
          placeholder="Digite o preço"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setCar(car => ({...car, age: e}))}
          value={String(car.age)}
          placeholder="Digite a idade"
        />
      </SafeAreaView>
      <View style={styles.buttons}>
        <Button color={false} onPress={() => patchCar()}>
          Editar
        </Button>
        <Button onPress={() => deleteCar()}>Excluir</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    height: 75,
    backgroundColor: '#1E4ABB',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
    color: '#ffffff',
  },
  area: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    width: '90%',
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  buttons: {
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cards: {
    alignItems: 'center',
    marginBottom: 75,
    marginTop: 20,
    marginBottom: 0,
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
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  title: {
    fontSize: 20,
    color: '#1E4ABB',
    marginRight: 50,
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
});
