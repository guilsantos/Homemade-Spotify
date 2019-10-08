const initialState = {
  tokenInput: ""
};

export const ACTION_TYPES = {
  SET_TOKEN: "SET_TOKEN"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_TOKEN: {
      return {
        ...state,
        tokenInput: payload
      };
    }

    default: {
      return { ...state };
    }
  }
};

export const setTokenInput = payload => dispatch => {
  dispatch({ type: ACTION_TYPES.SET_TOKEN, payload });
};
