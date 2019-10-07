import { all, fork } from 'redux-saga/effects'
import albums from './sagas/albums.saga'
import album from './sagas/album.saga'

export default function *rootSaga() {
  yield all([
    fork(albums),
    fork(album)
  ])
}
