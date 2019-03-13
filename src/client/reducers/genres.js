const genres = (state = {}, action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.genres;
    default:
      return state;
  }
};

export default genres;
