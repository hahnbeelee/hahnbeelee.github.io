import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage/LandingPage';
import Leidos from './containers/Leidos'
import VeraZone from './containers/VeraZone'

import history from './history';

import './styles/main.scss';

const App = () => (
  <div>
    <Helmet
      titleTemplate="%s - Hahnbee Lee"
      defaultTitle="Hahnbee Lee"
    >
      <meta name="description" content="Hahnbee Lee's portfolio" />
    </Helmet>
    <BrowserRouter history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/leidos" component={Leidos} />
          <Route path="/vera-zone" component={VeraZone} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  );

export default App;
