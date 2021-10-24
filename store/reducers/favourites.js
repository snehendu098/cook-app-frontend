let initialState = [];

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAV':
      let data = action.payload;
      let check = state.includes(data);

      if (check) {
        return state;
      } else {
        return [...state, action.payload];
      }

    case 'REMOVE_FAV':
      return state.filter(meal => meal._id != action.payload._id);

    default:
      return state;
  }
};

export default filterReducer;
