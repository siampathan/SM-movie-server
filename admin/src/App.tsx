import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Home from "./pages/home";

import EnglishMovies from "./pages/englishMovies";
import BanglaMovies from "./pages/banglaMovies";
import HindiMovies from "./pages/hindiMovies";
import OtherMovies from "./pages/othersMovies";

import UpdateEnglishMovie from "./pages/updateEnglishmovie";
import UpdateBanglaMovie from "./pages/updateBanglamovie";
import EnglishMovieDetails from "./pages/englishMovieDetails";
import BanglaMovieDetails from "./pages/banglaMovieDetails";
import HindiMovieDetails from "./pages/hindiMovieDetails";
import OtherMovieDetails from "./pages/othersMovieDetails";
import UpdateHindiMovie from "./pages/updateHindimovie";
import UpdateOtherMovie from "./pages/updateOthermovie";
import "./App.css";
import AddMoviePage from "./pages/addMoviePage";

export const backendUrl = import.meta.env.VITE_API_URL;

function App() {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="divied">
            <SideBar />
            <Routes>
              <Route path="/" element={<Home token={token} length={0} />} />
              <Route
                path="/english-movies"
                element={<EnglishMovies token={token} />}
              />
              <Route
                path="/bangla-movies"
                element={<BanglaMovies token={token} />}
              />
              <Route
                path="/hindi-movies"
                element={<HindiMovies token={token} />}
              />
              <Route
                path="/other-movies"
                element={<OtherMovies token={token} />}
              />

              <Route
                path="/add-movie"
                element={<AddMoviePage token={token} />}
              />
              <Route
                path="/update-movie/english/:id"
                element={<UpdateEnglishMovie token={token} />}
              />
              <Route
                path="/update-movie/bangla/:id"
                element={<UpdateBanglaMovie token={token} />}
              />
              <Route
                path="/update-movie/hindi/:id"
                element={<UpdateHindiMovie token={token} />}
              />
              <Route
                path="/update-movie/other/:id"
                element={<UpdateOtherMovie token={token} />}
              />
              <Route
                path="/movie-details/english/:id"
                element={<EnglishMovieDetails />}
              />
              <Route
                path="/movie-details/bangla/:id"
                element={<BanglaMovieDetails />}
              />
              <Route
                path="/movie-details/hindi/:id"
                element={<HindiMovieDetails />}
              />
              <Route
                path="/movie-details/other/:id"
                element={<OtherMovieDetails />}
              />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
