const initialState = {
  album: undefined,
  albumCache: {},
  isFething: false,
  error: false,
  fromCache: false,
  preview: {}
};

export const ACTION_TYPES = {
  CLEAR_ERROR: "CLEAR_ERROR",
  CLEAR: "CLEAR",
  SET_ALBUM_PREVIEW: "SET_ALBUM_PREVIEW",

  GET_ALBUM_REQUEST: "GET_ALBUM_REQUEST",
  GET_ALBUM_SUCCESS: "GET_ALBUM_SUCCESS",
  GET_ALBUM_ERROR: "GET_ALBUM_ERROR",
  GET_ALBUM_FROM_CACHE: "GET_ALBUM_FROM_CACHE"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CLEAR_ERROR: {
      return {
        ...state,
        error: false
      };
    }
    case ACTION_TYPES.CLEAR: {
      return {
        ...initialState,
        albumCache: state.albumCache
      };
    }
    case ACTION_TYPES.SET_ALBUM_PREVIEW: {
      return {
        ...state,
        preview: payload
      };
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
        album: payload.album,
        albumCache: {
          ...state.albumCache,
          [payload.query]: payload.album
        },
        isFething: false,
        fromCache: false
      };
    }
    case ACTION_TYPES.GET_ALBUM_ERROR: {
      return {
        ...state,
        error: true,
        isFething: false
      };
    }
    case ACTION_TYPES.GET_ALBUM_FROM_CACHE: {
      return {
        ...state,
        album: payload,
        isFething: false,
        fromCache: true
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
  dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
};

export const clear = dispatch => {
  dispatch({ type: ACTION_TYPES.CLEAR });
};

export const setAlbumPreview = payload => dispatch => {
  dispatch({ type: ACTION_TYPES.SET_ALBUM_PREVIEW, payload });
};
