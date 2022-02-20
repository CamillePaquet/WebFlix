
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useStyles from "./App.style";

import Home from "./components/Home.js";
import Details from "./components/Details.js";
import Header from "./components/Header.js";

const queryClient = new QueryClient();

function App() {
  const classes = useStyles();
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter >
      <Header/>
      <main className={classes.root}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films/:id" element={<Details />} />
        </Routes>
      </main>
      </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
