import React, {useEffect, useState} from 'react';
import {Button, Dimensions, StyleSheet, Switch, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const FiltersScreen = () => {
  const [meatIncluded, setMeatIncluded] = useState(false);
  const [nonVeg, setNonVeg] = useState(false);

  const dispatch = useDispatch();

  const availableFilters = {
    meatIncluded,
    nonVeg,
  };

  const filters = useSelector(state => state.filters);

  const handleClick = () => {
    dispatch({
      type: 'ADD_FILTERS',
      filters: availableFilters,
    });
  };

  useEffect(() => {
    handleClick();
  }, [meatIncluded, nonVeg]);

  // console.log(filters);

  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <Text style={styles.text}>Meat included</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={meatIncluded ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          value={meatIncluded}
          onValueChange={() => setMeatIncluded(!meatIncluded)}
        />
      </View>
      <View style={styles.subCont}>
        <Text style={styles.text}>Non-Veg Only</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={nonVeg ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          value={nonVeg}
          onValueChange={() => setNonVeg(!nonVeg)}
        />
      </View>
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.9 * Dimensions.get('window').width,
    marginTop: 20,
  },
  text: {
    color: '#000',
    marginHorizontal: 10,
    fontSize: 20,
  },
});
