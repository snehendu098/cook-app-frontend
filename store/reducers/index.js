import {combineReducers} from 'redux';
import mealsReducer from './mealReducer';

// configuring all the reducers
const rootReducers = combineReducers({
  meals: mealsReducer,
});

export default rootReducers;
