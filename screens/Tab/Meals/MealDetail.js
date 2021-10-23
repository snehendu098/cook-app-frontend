import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import GoBack from '../../../components/GoBack';

const MealDetail = ({navigation, route}) => {
  const data = route.params;

  console.log(data);

  let dummy = ['Orange ', 'Juicer (optional) ', 'Salt', 'Sugar'];

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
      <Text style={styles.header}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>

      <ImageBackground
        style={styles.image}
        source={{uri: `http://192.168.0.106:5000/uploads/${data.imageUrl}`}}
        resizeMode="contain"></ImageBackground>

      <Text
        style={[
          styles.header,
          {
            fontSize: 0.05 * Dimensions.get('window').width,
            alignSelf: 'flex-start',
            marginHorizontal: 10,
          },
        ]}>
        Materials Required
      </Text>

      {data.materials.map((item, index) => (
        <Text
          key={index}
          style={[
            styles.description,
            {alignSelf: 'flex-start', marginTop: 2, marginHorizontal: 10},
          ]}>
          {index + 1}. {item}
        </Text>
      ))}

      <Text
        style={[
          styles.header,
          {
            fontSize: 0.05 * Dimensions.get('window').width,
            alignSelf: 'flex-start',
            marginHorizontal: 10,
          },
        ]}>
        Steps of making
      </Text>
      <GoBack naviagtion={navigation} />

      {data.steps.map((item, index) => (
        <Text
          key={index}
          style={[
            styles.description,
            {alignSelf: 'flex-start', marginTop: 2, marginHorizontal: 10},
          ]}>
          {index + 1}. {item}
        </Text>
      ))}

      <View style={styles.lowerCont}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: '#000', fontWeight: '500'}}>Meat Included</Text>
          <Switch value={data.meatIncluded} thumbColor="#1260de" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: '#000', fontWeight: '500'}}>Non Veg</Text>
          <Switch value={data.nonVeg} thumbColor="#1260de" />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  header: {
    color: '#000',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 0.08 * Dimensions.get('window').width,
    fontWeight: '900',
  },
  description: {
    color: '#000',
    marginTop: 5,
    alignSelf: 'center',
  },
  image: {
    height: 0.25 * Dimensions.get('window').height,
    width: 0.95 * Dimensions.get('window').width,
    backgroundColor: 'gray',
    marginTop: 0.05 * Dimensions.get('window').width,
  },
  lowerCont: {
    backgroundColor: '#ffe7a6',
    height: 0.1 * Dimensions.get('window').height,
    width: 0.95 * Dimensions.get('window').width,
    marginTop: 10,
    borderRadius: 10,
  },
});
