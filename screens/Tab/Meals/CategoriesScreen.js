import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CateContainer from '../../../components/CateContainer';
import axios from '../../../axios';

function CategoriesScreen({navigation}) {
  const [cate, setCate] = useState([]);

  const fetchData = async () => {
    try {
      let data = await axios.get('/category');
      setCate(data.data);
      return data;
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cate]);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
      {cate.map(item => (
        <React.Fragment key={item._id}>
          <CateContainer
            name={item.name}
            onPress={() => {
              navigation.navigate('Meals');
            }}
          />
        </React.Fragment>
      ))}
    </ScrollView>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
