const initialState = {
  album: undefined,
  isFething: false,
  error: false
};

export const ACTION_TYPES = {
  CLEAR_ERROR: "CLEAR_ERROR",
  CLEAR: "CLEAR",

  GET_ALBUM_REQUEST: "GET_ALBUM_REQUEST",
  GET_ALBUM_SUCCESS: "GET_ALBUM_SUCCESS",
  GET_ALBUM_ERROR: "GET_ALBUM_ERROR"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CLEAR_ERROR: {
      return {
        ...state,
        error: false
      }
    }
    case ACTION_TYPES.CLEAR: {
      return {
        ...initialState
      }
    }
    case ACTION_TYPES.GET_ALBUM_REQUEST: {
      return {
        ...state,
        isFething: true
      };
    }
    case ACTION_TYPES.GET_ALBUM_SUCCESS: {
      return {
        ...state,
        album: payload,
        isFething: false
      };
    }
    case ACTION_TYPES.GET_ALBUM_ERROR: {
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

export const getAlbum = payload => dispatch => {
  dispatch({ type: ACTION_TYPES.GET_ALBUM_REQUEST, payload });
};

export const clearError = () => dispatch => {
  dispatch({ type: ACTION_TYPES.CLEAR_ERROR })
}

export const clear = () => dispatch => {
  dispatch({ type: ACTION_TYPES.CLEAR })
}
