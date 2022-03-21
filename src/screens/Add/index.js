import axios from 'axios';
import React, {useState} from 'react';
import {View, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {newToast} from '../../functions/newToast';

export default ({navigation}) => {
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [age, setAge] = useState('');

  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  const verify = () => {};

  const add = () => {
    if (title.length < 1) {
      return newToast('Preencha o modelo corretamente');
    }
    if (brand.length < 1) {
      return newToast('Preencha o marca corretamente');
    }
    if (price.length <= 3) {
      return newToast('Preencha o preço corretamente');
    }
    if (age.length !== 4) {
      return newToast('Preencha o ano corretamente');
    } else {
      axios
        .post('http://api-test.bhut.com.br:3000/api/cars', {
          title: capitalize(title),
          brand: capitalize(brand),
          price: String(price),
          age: age,
        })
        .then(() => {
          newToast('Carro salvo com sucesso');
          setTitle('');
          setBrand('');
          setPrice('');
          setAge('');
        });
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header name={'Adicionar um novo carro'} navigation={navigation} />
      <SafeAreaView style={styles.area}>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Digite o modelo"
          errorMessage="Preencha o nome"
        />
        <TextInput
          style={styles.input}
          onChangeText={setBrand}
          value={brand}
          placeholder="Digite a marca"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPrice}
          value={price}
          keyboardType="numeric"
          placeholder="Digite o preço"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          keyboardType="numeric"
          placeholder="Digite o ano"
        />
      </SafeAreaView>
      <View style={styles.buttons}>
        <Button onPress={() => add()}>Criar</Button>
      </View>
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
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
    color: '#fff',
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
    alignItems: 'center',
  },
});
