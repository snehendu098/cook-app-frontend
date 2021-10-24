import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealsContainer from '../components/MealsContainer';

const FavouritesScreen = ({navigation}) => {
  const favourites = useSelector(state => state.favourites);

  console.log(favourites);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {favourites.length != 0 ? (
        <View style={{marginTop: 10}}>
          <FlatList
            data={favourites}
            renderItem={({item}) => (
              <MealsContainer
                mealItem={item}
                onPress={() => navigation.navigate('MealDetail', item)}
              />
            )}
            keyExtractor={item => item._id}
          />
        </View>
      ) : (
        <Text
          style={{
            color: '#000',
            marginTop: 0.4 * Dimensions.get('window').height,
            fontSize: 20,
            fontWeight: '900',
          }}>
          No favourite Meals
        </Text>
      )}
    </View>
  );
};

export default FavouritesScreen;
