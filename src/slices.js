import { createSlice , current} from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        toggle: (state, action) =>
        current(state).includes(action.payload.film)
        ? current(state).filter((film) => film !== action.payload.film)
        : [...state, action.payload.film],
  },
});

export const moviesSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
      add: (state, action) => [
        ...state,
        ...action.payload.movies.filter(
          (movie) => !state.some(({ id }) => movie.id === id)
        ),
      ],
    },
  });