import React, {useEffect, useRef} from 'react';
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

const MealsScreen = ({navigation}) => {
  const [meal, setMeal] = React.useState([]);

  const fetchData = async () => {
    let data = await axios.get('/meals');
    setMeal(data.data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, [meal]);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <FlatList
        data={meal}
        renderItem={({item}) => <MealsContainer mealItem={item} />}
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
