<<<<<<< HEAD
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
=======
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
>>>>>>> d115625 (third commit)
