import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GoBack = ({naviagtion}) => {
  return (
    <Pressable style={styles.circle} onPress={() => naviagtion.goBack()}>
      <AntDesign name="back" size={30} color="#fff" />
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  circle: {
    width: 0.2 * Dimensions.get('window').width,
    height: 0.2 * Dimensions.get('window').width,
    backgroundColor: '#ffae00',
    position: 'absolute',
    bottom: 5,
    borderRadius: (0.2 * Dimensions.get('window').width) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
    zIndex: 100,
  },
});
