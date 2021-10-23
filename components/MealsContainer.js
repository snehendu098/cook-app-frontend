import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const MealsContainer = ({mealItem, onPress}) => {
  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android') {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <Touchable onPress={onPress}>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={{
          uri: `http://192.168.0.106:5000/uploads/${mealItem.imageUrl}`,
        }}>
        <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
          {mealItem.name}
        </Text>
      </ImageBackground>
    </Touchable>
  );
};

export default MealsContainer;

const styles = StyleSheet.create({
  container: {
    height: 0.25 * Dimensions.get('window').height,
    width: 0.95 * Dimensions.get('window').width,
    backgroundColor: 'gray',
    marginTop: 0.05 * Dimensions.get('window').width,
    justifyContent: 'flex-end',
  },
  text: {
    width: 0.95 * Dimensions.get('window').width,
    backgroundColor: 'rgba(154, 153, 151, 0.8)',
    height: '20%',
    fontSize: 27,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 3,
  },
});
