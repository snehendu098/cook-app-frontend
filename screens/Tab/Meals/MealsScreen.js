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

const MealsScreen = ({navigation}) => {
  const meals = useSelector(state => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    axios
      .get('/meals')
      .then(e => {
        if (mounted) {
          dispatch({type: 'ADD_MEALS', payload: e.data});
        }
      })
      .catch(e => console.log(e));
    return () => {
      mounted = false;
    };
  }, []);

  console.log(meals);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <FlatList
        data={meals}
        renderItem={({item}) => (
          <MealsContainer
            mealItem={item}
            onPress={() => navigation.navigate('MealDetail', item)}
          />
        )}
        keyExtractor={item => item._id}
      />

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
});
