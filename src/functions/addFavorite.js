import AsyncStorage from '@react-native-async-storage/async-storage';
import {newToast} from './newToast';

export const addFavorite = async data => {
  let cars = (await AsyncStorage.getItem('cars')) || [];
  cars = JSON.parse(cars);
  try {
    if (!cars.find(item => item._id === data._id)) {
      cars.push(data);
      AsyncStorage.setItem('cars', JSON.stringify(cars));
      return newToast('Carro salvo em seus favoritos');
    } else {
      return newToast('Você já possui esse carro salvo em seus favoritos');
    }
  } catch (e) {}
};
