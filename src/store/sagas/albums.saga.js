import { put, call, takeLatest, select } from "redux-saga/effects";
import { ACTION_TYPES } from "../reducers/albums.reducer";
import { getAlbums } from "../../services";

const {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
  GET_ALBUMS_FROM_CACHE
} = ACTION_TYPES;

export function* getAlbumsSaga({ payload }) {
  try {
    const {
      albums: { albumsCache }
    } = yield select();

    if (albumsCache[payload] !== undefined) {
      yield put({ type: GET_ALBUMS_FROM_CACHE, payload: albumsCache[payload] });
    } else {
      const response = yield call(getAlbums, payload);

      if (
        response.error &&
        (response.error.status === 400 || response.error.status === 401)
      )
        throw "Token inválido";

      yield put({
        type: GET_ALBUMS_SUCCESS,
        payload: { albums: response.albums.items, query: payload }
      });
    }
  } catch (err) {
    yield put({ type: GET_ALBUMS_ERROR, payload: err });
  }
}

export default function* watchAlbums() {
  yield takeLatest(GET_ALBUMS_REQUEST, getAlbumsSaga);
}
