import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home.js";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">À propos</Link>
          <Link to="/users">Users</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
