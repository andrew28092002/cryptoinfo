import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

const rootReducer = combineReducers({
  [cryptoApi.reducerPath]: cryptoApi.reducer,
  [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cryptoApi.middleware,
      cryptoNewsApi.middleware,
    ]),
});

export const AppDispatch = typeof store;
