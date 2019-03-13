const filmData = (state = { data: {}, similarFilms: {} }, action) => {
  switch (action.type) {
    case 'SET_FILM_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'SET_FILM_SIMILAR':
      return {
        ...state,
        similarFilms: action.similarFilms,
      };
    default:
      return state;
  }
};

export default filmData;
