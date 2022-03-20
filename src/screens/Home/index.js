import React, {useState, useCallback} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import {useFocusEffect} from '@react-navigation/native';
import Carousel from '../../components/Carousel';
import {useCars} from '../../context/GetCars';

export default ({navigation}) => {
  const [slide, setSlide] = useState(0);
  const {getCars, cars} = useCars();

  useFocusEffect(
    useCallback(() => {
      getCars();
    }, []),
  );

  const onScroll = event => {
    const width = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.floor(xPos / width);
    setSlide(current);
  };

  return (
    <View style={styles.view}>
      <Image source={require('../../assets/car.png')} style={styles.image} />
      {cars && (
        <View style={{height: 160, marginBottom: 5}}>
          <Carousel cars={cars} onScroll={onScroll} />
          <View style={styles.dots}>
            {cars.slice(0, 3).map((_, index) => (
              <View
                key={index}
                style={slide === index ? styles.dot : styles.scale}
              />
            ))}
          </View>
        </View>
      )}
      <View style={styles.cards}>
        {cars &&
          cars.slice(0, 6).map(item => {
            return <Card item={item} navigation={navigation} />;
          })}
      </View>
      <View style={styles.button}>
        <Button onPress={() => navigation.navigate('All')}>
          Todos os carros
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  image: {
    position: 'absolute',
    height: 160,
    width: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  button: {
    alignItems: 'center',
    textAlign: 'center',
  },
  cards: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dots: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: '#cccccc',
    height: 10,
    margin: 5,
    borderRadius: 50,
    width: 10,
    transform: [{scale: 1.2}],
  },
  scale: {
    height: 10,
    margin: 5,
    borderRadius: 50,
    width: 10,
    backgroundColor: '#ffffff',
  },
});
