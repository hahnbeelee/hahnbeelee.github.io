import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import NavBar from '../components/NavBar';
import LandingPage from './LandingPage';
import history from '../history';

import '../uikit/css/uikit.min.css';
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
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  );

export default App;
