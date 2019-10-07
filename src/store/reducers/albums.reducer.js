const initialState = {
  albums: [],
  albumsCache: {},
  isFething: false,
  searchTerm: "",
  error: false,
  fromCache: false
};

export const ACTION_TYPES = {
  ALBUMS_SEARCH: "ALBUMS_SEARCH",
  CLEAR_ERROR: "CLEAR_ERROR",

  GET_ALBUMS_REQUEST: "GET_ALBUMS_REQUEST",
  GET_ALBUMS_SUCCESS: "GET_ALBUMS_SUCCESS",
  GET_ALBUMS_ERROR: "GET_ALBUMS_ERROR",
  GET_ALBUMS_FROM_CACHE: "GET_ALBUMS_FROM_CACHE"
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
        albums: [...payload.albums],
        albumsCache: {
          ...state.albumsCache,
          [payload.query]: [...payload.albums]
        },
        isFething: false,
        fromCache: false
      };
    }
    case ACTION_TYPES.GET_ALBUMS_ERROR: {
      return {
        ...state,
        error: true,
        isFething: false
      };
    }
    case ACTION_TYPES.GET_ALBUMS_FROM_CACHE: {
      return {
        ...state,
        albums: payload,
        isFething: false,
        fromCache: true
      }
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
