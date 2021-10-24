import {combineReducers} from 'redux';
import filtersReducer from './filterReducer';
import mealsReducer from './mealReducer';

// configuring all the reducers
const rootReducers = combineReducers({
  meals: mealsReducer,
  filters: filtersReducer,
});

export default rootReducers;
