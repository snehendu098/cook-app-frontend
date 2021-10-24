import {combineReducers} from 'redux';
import filtersReducer from './reducers/filterReducer';
import mealsReducer from './reducers/mealReducer';

// configuring all the reducers
const rootReducers = combineReducers({
  meals: mealsReducer,
  filters: filtersReducer,
});

export default rootReducers;
