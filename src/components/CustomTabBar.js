import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Star from '../assets/star.svg';
import Home from '../assets/home.svg';
import Add from '../assets/add.svg';

export default ({state, navigation}) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.touchableOpacity}>
        <Home
          width={30}
          height={30}
          style={{opacity: state.index === 0 ? 1 : 0.5}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Add')}
        style={styles.touchableOpacity}>
        <Add
          width={30}
          height={30}
          style={{
            opacity: state.index === 1 ? 1 : 0.5,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Favorites')}
        style={styles.touchableOpacity}>
        <Star
          width={30}
          height={30}
          style={{opacity: state.index === 2 ? 1 : 0.5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 50,
    backgroundColor: '#3E5FB4',
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  touchableOpacity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
