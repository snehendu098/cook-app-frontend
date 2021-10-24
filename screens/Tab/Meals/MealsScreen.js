import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MealsContainer from '../../../components/MealsContainer';
import axios from '../../../axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

const MealsScreen = ({navigation, route}) => {
  const meals = useSelector(state => state.meals);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const {cate} = route.params;

  const displayedMeals = meals.filter(meal => meal.category === cate);

  // const mealsFilter = displayedMeals.filter();

  useEffect(() => {
    let mounted = true;

    axios
      .get('/meals')
      .then(e => {
        if (mounted && meals.length === 0) {
          dispatch({type: 'ADD_MEALS', payload: e.data});
        }
      })
      .catch(e => console.log(e));
    return () => {
      mounted = false;
    };
  }, []);

  console.log('filters : ' + filters);

  let filteredState = displayedMeals.filter(item => {
    if (filters.meatIncluded && !item.meatIncluded) {
      return false;
    }

    if (filters.nonVeg && !item.nonVeg) {
      return false;
    }

    return true;
  });

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {filteredState.length != 0 ? (
        <View style={{marginTop: 10}}>
          <FlatList
            data={filteredState}
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
        <Text style={styles.txt}>No Meals to display</Text>
      )}

      <Pressable style={styles.circle} onPress={() => navigation.goBack()}>
        <AntDesign name="back" size={30} color="#fff" />
      </Pressable>
    </View>
  );
};

export default MealsScreen;

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
  },
  txt: {
    color: '#000',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 0.44 * Dimensions.get('window').height,
  },
});
