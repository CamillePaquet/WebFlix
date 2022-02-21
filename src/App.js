import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favoritesSlice } from "./slices";

import useStyles from "./App.style";

import Home from "./components/Home.js";
import Details from "./components/Details.js";
import Header from "./components/Header.js";
import Favorites from "./components/Favorites.js";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorites: favoritesSlice.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

const queryClient = new QueryClient();

function App() {
  const classes = useStyles();
  
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter >
            <Header  />
            <main className={classes.root}>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/films/:id" element={<Details />} />
                <Route path="/favorites" element={<Favorites/>} />
              </Routes>
            </main>
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
