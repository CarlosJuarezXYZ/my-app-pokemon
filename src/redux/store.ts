import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import pokemonReducer from './slices/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
