import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useStyles from "./App.style";

import Home from "./components/Home.js";
import Details from "./components/Details.js";
import Header from "./components/Header.js";
import Favorites from "./components/Favorites.js";
const queryClient = new QueryClient();

function App() {
  const classes = useStyles();
  const [favorites, setFavorites] = useState([]);


  const addToFavorite = (film) => (event) => {
    event.preventDefault();
    if (!favorites.includes(film)) {
      setFavorites([...favorites, film]);
    }
  };
  
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter >
    <Header favorites={favorites} />
      <main className={classes.root}>
        <Routes>
            <Route path="/" element={<Home addToFavorite={addToFavorite} favorites={favorites} />} />
            <Route path="/films/:id" element={<Details addToFavorite={addToFavorite} favorites={favorites} />} />
            <Route path="/favorites" element={<Favorites addToFavorite={addToFavorite} favorites={favorites}/>} />
        </Routes>
      </main>
      </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
