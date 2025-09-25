import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

//import Home from "./components/poster/home";
const Home = lazy(() => import ("./components/poster/home"));

import EnglishMovies from "./pages/englishMovies";
import EnglishMoviesDetails from "./pages/englishMoviesDetails";
import BanglaMovies from "./pages/banglaMovies";
import HindiMovies from "./pages/hindiMovies";
import OthersMovies from "./pages/othersMovies";
import Navbar from "./components/navbar/navbar";
import HindiMoviesDetails from "./pages/hindiMoviesDetails";
import BanglaMoviesDetails from "./pages/banglaMoviesDetails";
import OthersMoviesDetails from "./pages/othersMoviesDetails";
import "./App.css";
import Footer from "./components/footer/footer";

export const backendUrl = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english-movies/" element={<EnglishMovies />} />
        <Route path="/bangla-movies/" element={<BanglaMovies />} />
        <Route path="/hindi-movies/" element={<HindiMovies />} />
        <Route path="/other-movies/" element={<OthersMovies />} />
        <Route
          path="/english-movies/english/:id"
          element={<EnglishMoviesDetails />}
        />
        <Route
          path="/hindi-movies/hindi/:id"
          element={<HindiMoviesDetails />}
        />
        <Route
          path="/bangla-movies/bangla/:id"
          element={<BanglaMoviesDetails />}
        />
        <Route
          path="/other-movies/other/:id"
          element={<OthersMoviesDetails />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
