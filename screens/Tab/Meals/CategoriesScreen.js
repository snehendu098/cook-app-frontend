import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CateContainer from '../../../components/CateContainer';
import axios from '../../../axios';

function CategoriesScreen({navigation}) {
  const [cate, setCate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  // unmounted component
  useEffect(() => {
    let mounted = true;
    axios
      .get('/category')
      .then(e => {
        if (mounted) {
          setLoading(false);
          setCate(e.data);
        }
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
        setErr(true);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {loading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          {err ? (
            <Text>An unknown error occurred</Text>
          ) : (
            <>
              {cate.length != 0 ? (
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}>
                  {cate.map(item => (
                    <React.Fragment key={item._id}>
                      <CateContainer
                        name={item.name}
                        onPress={() => {
                          navigation.navigate('Meals', {cate: item.name});
                        }}
                      />
                    </React.Fragment>
                  ))}
                </ScrollView>
              ) : (
                <Text>Nothing to display</Text>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
