import {combineReducers} from 'redux';
import favourites from './reducers/favourites';
import filtersReducer from './reducers/filterReducer';
import mealsReducer from './reducers/mealReducer';

// configuring all the reducers
const rootReducers = combineReducers({
  meals: mealsReducer,
  filters: filtersReducer,
  favourites: favourites,
});

export default rootReducers;
