import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useCallback} from 'react';
import {View, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
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
      alert('Carro excluído');
    });
  };

  const patchCar = () => {
    if (car.title.length < 1) {
      return alert('Preencha o modelo corretamente');
    }
    if (car.brand.length < 1) {
      return alert('Preencha o marca corretamente');
    }
    if (car.price.length <= 3) {
      return alert('Preencha o preço corretamente');
    }
    if (String(car.age).length !== 4) {
      return alert('Preencha o ano corretamente');
    } else {
      api.put(`/cars/${id}`, car).then(response => {
        setCar(response.data);
        alert('Carro editado');
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
    height: 140,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
