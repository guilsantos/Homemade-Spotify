import { combineReducers } from "redux";
import albums from "./reducers/albums.reducer";
import album from "./reducers/album.reducer";
import login from "./reducers/login.reducer";

const rootReducer = combineReducers({
  albums,
  album,
  login
});

export default rootReducer;
