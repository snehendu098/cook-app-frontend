import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/Tab/Meals/CategoriesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavouritesScreen from './screens/FavouritesScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#ffae00',
          tabBarActiveTintColor: '#0055ff',
          headerStyle: {
            backgroundColor: '#ffae00',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#0055ff',
        }}>
        <Tab.Screen
          name="Root"
          component={TopTabs}
          options={{
            headerShown: false,
            title: 'Meals',
            tabBarIcon: ({size, color}) => {
              return <Ionicons name="fast-food" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <MaterialIcons name="favorite" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FiltersScreen from './screens/Tab/FiltersScreen';
import {Dimensions, StatusBar} from 'react-native';
import MealsScreen from './screens/Tab/Meals/MealsScreen';
import MealDetail from './screens/Tab/Meals/MealDetail';

const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        title: 'Meals',
        tabBarStyle: {
          backgroundColor: '#ffae00',
          paddingTop: 18,
        },
        tabBarActiveTintColor: '#0055ff',
      }}>
      <TopTab.Screen name="TopRoot" component={TopTabsRoot} />
      <TopTab.Screen
        name="Filter"
        component={FiltersScreen}
        options={{title: 'Filter'}}
      />
    </TopTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function TopTabsRoot() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Meals" component={MealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetail} />
    </Stack.Navigator>
  );
}

export default App;
