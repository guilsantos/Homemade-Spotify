import { put, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "../reducers/albums.reducer";
import { getAlbums } from "../../services";

const {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR
} = ACTION_TYPES;

export function* getAlbumsSaga({ payload }) {
  try {
    const response = yield call(getAlbums, payload);
    if (response.error && (response.error.status === 400 || response.error.status === 401))
      throw "Token inválido";
    yield put({ type: GET_ALBUMS_SUCCESS, payload: response.albums.items });
  } catch (err) {
    yield put({ type: GET_ALBUMS_ERROR, payload: err });
  }
}

export default function* watchAlbums() {
  yield takeLatest(GET_ALBUMS_REQUEST, getAlbumsSaga);
}
