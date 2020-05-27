import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 30,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 10,
    left: 30
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  deleteIcon: {
    width: 50,
    height: 30,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 10,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
