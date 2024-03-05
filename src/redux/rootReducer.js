import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todosReducer from "./todos/todos-slice";
import filterReducer from "./filter/filter-slice";

const persistConfig = {
	key: "todos",
	storage,
	whitelist: ["todos"],
};

const rootReducer = combineReducers({
	todos: todosReducer,
	filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
