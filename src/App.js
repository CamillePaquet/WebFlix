import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home.js";
import Details from "./components/Details.js";

function App() {
  return (
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
  );
}

export default App;
