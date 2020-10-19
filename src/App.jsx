import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BeersPage from "./Pages/BeersPage/BeersPage";
import BeersDetailPage from "./Pages/BeersDetail/BeersDetailPage";
import RandomBeerPage from "./Pages/RandomBeer/RandomBeerPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/beerdetail/:id">
            <BeersDetailPage />
          </Route>
          <Route path="/beers">
            <BeersPage />
          </Route>
          <Route path="/random">
            <RandomBeerPage/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
