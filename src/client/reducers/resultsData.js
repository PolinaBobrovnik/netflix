const resultsData = (state = {
  data: {},
  sortBy: 'rating',
  sorterNames: ['release date', 'rating'],
}, action) => {
  switch (action.type) {
    case 'SET_RESULTS_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};

export default resultsData;
