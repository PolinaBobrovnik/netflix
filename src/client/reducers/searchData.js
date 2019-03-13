const searchData = (state = {
  searchBy: 'movie', filterNames: ['movie', 'tv']
}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_BY':
      return {
        ...state,
        searchBy: action.searchBy,
      };
    default:
      return state;
  }
};

export default searchData;
