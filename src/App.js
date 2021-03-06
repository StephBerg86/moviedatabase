import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/discover" component={DiscoverMoviesPage} />
        <Route path="/movie/:imdbID" component={MoviePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
