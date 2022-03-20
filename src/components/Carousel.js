import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {formatNumber} from '../functions/formatNumber';

export default ({cars, onScroll}) => {
  const {width} = Dimensions.get('window');

  return (
    <FlatList
      data={cars.slice(0, 3)}
      keyExtractor={item => String(item._id)}
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array(cars.length)].map(
        (_, index) => index * (width + 50) + (index - 1),
      )}
      onScroll={onScroll}
      horizontal
      snapToAlignment={'start'}
      scrollEventThrottle={16}
      decelerationRate="fast"
      renderItem={({item}, index) => (
        <View
          key={index}
          style={{
            width: width,
            marginHorizontal: 20,
            marginLeft: 30,
          }}>
          <View style={styles.text}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.age}>{item.age}</Text>
          </View>
          <Text style={styles.brand}>{item.brand} </Text>
          <Text style={styles.price}>R$ {formatNumber(item.price)}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: '#ffffff',
  },
  brand: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 25,
  },
  age: {
    fontSize: 14,
    color: '#ffffff',
  },
  price: {
    fontSize: 18,
    color: '#ffffff',
  },
});
