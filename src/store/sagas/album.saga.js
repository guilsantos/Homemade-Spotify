import { put, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "../reducers/album.reducer";
import { getAlbumById } from "../../services";

const { GET_ALBUM_REQUEST, GET_ALBUM_SUCCESS, GET_ALBUM_ERROR } = ACTION_TYPES;

export function* getAlbumSaga({ payload }) {
  try {
    const response = yield call(getAlbumById, payload);
    if (response.error && (response.error.status === 400 || response.error.status === 401))
      throw "Token inválido";
    yield put({ type: GET_ALBUM_SUCCESS, payload: response });
  } catch (err) {
    console.log("DEU ERRO");
    yield put({ type: GET_ALBUM_ERROR, payload: err });
  }
}

export default function* watchAlbums() {
  yield takeLatest(GET_ALBUM_REQUEST, getAlbumSaga);
}
