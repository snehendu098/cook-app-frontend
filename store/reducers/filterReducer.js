let initialState = {
  meatIncluded: false,
  nonVeg: false,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FILTERS':
      const availableFilters = action.filters;
      return (state = availableFilters);

    default:
      return state;
  }
};

export default filtersReducer;
