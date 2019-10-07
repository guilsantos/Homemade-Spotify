import albums, { ACTION_TYPES } from "./albums.reducer";

const initialState = {
  albums: [],
  albumsCache: {},
  isFething: false,
  searchTerm: "",
  error: false,
  fromCache: false
};

describe("ALBUMS reducer", () => {
  const {
    GET_ALBUMS_REQUEST,
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_ERROR
  } = ACTION_TYPES;

  it("should return isFething true when request", () => {
    expect(albums(undefined, { type: GET_ALBUMS_REQUEST })).toEqual({
      ...initialState,
      isFething: true
    });
  });

  it("should return error true when dispatch GET_ALBUMS_ERROR", () => {
    expect(albums(undefined, { type: GET_ALBUMS_ERROR })).toEqual({
      ...initialState,
      error: true
    });
  });

  it("should return the albums list, and cache the info when dispatch GET_ALBUMS_SUCCESS", () => {
    expect(
      albums(undefined, {
        type: GET_ALBUMS_SUCCESS,
        payload: {
          albums: [
            {
              artist: "Mc Livinho"
            }
          ],
          query: "mc+livinho"
        }
      })
    ).toEqual({
      ...initialState,
      albums: [{ artist: "Mc Livinho" }],
      albumsCache: {
        "mc+livinho": [{ artist: "Mc Livinho" }]
      }
    });
  });
});
