import { combineReducers } from "redux";
import albums from "./reducers/albums.reducer";
import album from "./reducers/album.reducer";

const rootReducer = combineReducers({
  albums,
  album
});

export default rootReducer;
