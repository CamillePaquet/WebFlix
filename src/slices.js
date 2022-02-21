import { createSlice , current} from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        add: (state, action) =>
            state.forEach((film) => console.log(film)),
        remove: (state, action) => state.filter((film) => film !== action.payload.film),
        toggle: (state, action) =>
        current(state).includes(action.payload.film)
        ? current(state).filter((film) => film !== action.payload.film)
        : [...state, action.payload.film],
  },
});