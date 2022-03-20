import AsyncStorage from '@react-native-async-storage/async-storage';

export const addFavorite = async data => {
  let cars = (await AsyncStorage.getItem('cars')) || [];
  cars = JSON.parse(cars);
  try {
    if (!cars.find(item => item._id === data._id)) {
      console.log(cars);
      cars.push(data);
      AsyncStorage.setItem('cars', JSON.stringify(cars));
      return alert('Carro salvo em seus favoritos');
    } else {
      return alert('Você já possui esse carro salvo em seus favoritos');
    }
  } catch (e) {}
};
