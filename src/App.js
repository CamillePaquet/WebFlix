import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import Home from "./components/Home.js";
import Details from "./components/Details.js";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
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
