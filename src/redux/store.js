import loginReducer from "./login/slice";
import listReducer from "./list/slice";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  login: loginReducer,
  list: listReducer,
});

export default configureStore({
  reducer: rootReducer,
});
