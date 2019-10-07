import { put, call, takeLatest, select } from "redux-saga/effects";
import albumReducer, { ACTION_TYPES } from "../reducers/album.reducer";
import { getAlbumById } from "../../services";

const {
  GET_ALBUM_REQUEST,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR,
  GET_ALBUM_FROM_CACHE
} = ACTION_TYPES;

export function* getAlbumSaga({ payload }) {
  try {
    const {
      album: { albumCache }
    } = yield select();

    if (albumCache[payload] !== undefined) {
      yield put({ type: GET_ALBUM_FROM_CACHE, payload: albumCache[payload] });
    } else {
      const response = yield call(getAlbumById, payload);

      if (
        response.error &&
        (response.error.status === 400 || response.error.status === 401)
      )
        throw "Token inválido";

      yield put({
        type: GET_ALBUM_SUCCESS,
        payload: { album: response, query: payload }
      });
    }
  } catch (err) {
    yield put({ type: GET_ALBUM_ERROR, payload: err });
  }
}

export default function* watchAlbums() {
  yield takeLatest(GET_ALBUM_REQUEST, getAlbumSaga);
}
