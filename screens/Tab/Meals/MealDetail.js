import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GoBack from '../../../components/GoBack';

const MealDetail = ({navigation, route}) => {
  const data = route.params;
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);

  const favourites = useSelector(state => state.favourites);

  const addToFav = () => {
    check
      ? dispatch({
          type: 'REMOVE_FAV',
          payload: data,
        })
      : dispatch({
          type: 'ADD_TO_FAV',
          payload: data,
        });
  };

  useEffect(() => {
    const verify = favourites.includes(data);
    setCheck(verify);
  }, [favourites]);

  // console.log(data);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
      <View style={styles.lowerCont}>
        <Text style={styles.header}>{data.name}</Text>
      </View>
      <Text style={styles.description}>{data.description}</Text>

      <ImageBackground
        style={styles.image}
        source={{uri: `http://192.168.0.106:5000/uploads/${data.imageUrl}`}}
        resizeMode="contain"></ImageBackground>
      <View style={{width: 0.95 * Dimensions.get('window').width}}>
        <Button
          color="red"
          title={check ? 'Remove from Favourites' : 'Add to favourites'}
          touchSoundDisabled={false}
          onPress={addToFav}
        />
      </View>

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
        {data.nonVeg ? (
          <Text style={styles.tag}>Non-Veg</Text>
        ) : (
          <Text style={styles.tag}>Veg</Text>
        )}
        {data.meatIncluded ? (
          <Text style={styles.tag}>Meat Included</Text>
        ) : (
          <Text style={styles.tag}>No meat included</Text>
        )}
      </View>
      <GoBack naviagtion={navigation} />
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  tag: {
    padding: 9,
    backgroundColor: '#0055ff',
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },
});
