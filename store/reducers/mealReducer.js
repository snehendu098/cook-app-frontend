let initialState = [];

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MEALS':
      return (state = action.payload);

    default:
      return state;
  }
};

export default mealsReducer;
