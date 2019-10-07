const initialState = {
  albums: [],
  isFething: false,
  searchTerm: "",
  error: false
};

export const ACTION_TYPES = {
  ALBUMS_SEARCH: "ALBUMS_SEARCH",
  CLEAR_ERROR: "CLEAR_ERROR",

  GET_ALBUMS_REQUEST: "GET_ALBUMS_REQUEST",
  GET_ALBUMS_SUCCESS: "GET_ALBUMS_SUCCESS",
  GET_ALBUMS_ERROR: "GET_ALBUMS_ERROR"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.ALBUMS_SEARCH: {
      return {
        ...state,
        searchTerm: payload
      };
    }
    case ACTION_TYPES.CLEAR_ERROR: {
      return {
        ...state,
        error: false
      }
    }
    case ACTION_TYPES.GET_ALBUMS_REQUEST: {
      return {
        ...state,
        isFething: true
      };
    }
    case ACTION_TYPES.GET_ALBUMS_SUCCESS: {
      return {
        ...state,
        albums: [...payload],
        isFething: false
      };
    }
    case ACTION_TYPES.GET_ALBUMS_ERROR: {
      return {
        ...state,
        error: true,
        isFething: false
      };
    }

    default: {
      return { ...state };
    }
  }
};

export const getAlbums = payload => dispatch => {
  dispatch({ type: ACTION_TYPES.GET_ALBUMS_REQUEST, payload });
};

export const setSearchTerm = payload => dispatch => {
  dispatch({ type: ACTION_TYPES.ALBUMS_SEARCH, payload });
};

export const clearError = () => dispatch => {
  dispatch({ type: ACTION_TYPES.CLEAR_ERROR })
}
