import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CateContainer = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default CateContainer;

const styles = StyleSheet.create({
  container: {
    width: 0.45 * Dimensions.get('window').width,
    height: 0.45 * Dimensions.get('window').width,
    borderRadius: 10,
    backgroundColor: '#ffd16e',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '900',
    color: '#0055ff',
    fontSize: 20,
  },
});
