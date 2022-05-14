import "./App.css";
import MoviesList from "./movies/MoviesList";
import { landingPageDTO } from "./movies/movies.model";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandingPage";
import routes from "./route-config";
import configureValidations from "./Validations";

configureValidations();

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </div>
      <footer className="bd-footer py-5 mt-5 bg-light">
        <div className="container">
          React Movies{new Date().getFullYear().toString()}
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
