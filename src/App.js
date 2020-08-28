import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";

import LandingPage from "./containers/LandingPage/LandingPage";
import About from "./containers/About";
import Skills from "./containers/Skills";
import Work from "./containers/Work";

// articles
import Leidos from "./containers/articles/Leidos";
import VeraZone from "./containers/articles/VeraZone";
import ReactComponents from "./containers/articles/ReactComponents";
import GoodStuff from "./containers/articles/GoodStuff";
import history from "./history";

import "./styles/main.scss";

const App = () => (
  <div>
    <Helmet titleTemplate="%s - Hahnbee Lee" defaultTitle="Hahnbee Lee">
      <meta name="description" content="Hahnbee Lee's portfolio" />
    </Helmet>
    <BrowserRouter history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />

          {/* articles */}
          <Route path="/leidos" component={Leidos} />
          <Route path="/vera-zone" component={VeraZone} />
          <Route path="/react-components" component={ReactComponents} />
          <Route path="/goodstuff" component={GoodStuff} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
