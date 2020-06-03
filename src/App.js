import React from 'react';
import loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import loading from 'components/Common/Loading';

const Login = loadable({
  loader: () => import('pages/Login'),
  loading
});

const Index = loadable({
  loader: () => import('pages/Index'),
  loading
});


const Carousel = loadable({
  loader: () => import('pages/Index/Carousel'),
  loading
});

const Promote = loadable({
  loader: () => import('pages/Index/Promote'),
  loading
});

const ESports = loadable({
  loader: () => import('pages/Index/ESports'),
  loading
});

const Live = loadable({
  loader: () => import('pages/Index/Live'),
  loading
});

const Full = loadable({
  loader: () => import('pages/Index/Full'),
  loading
});

const Bangumi = loadable({
  loader: () => import('pages/Index/Bangumi'),
  loading
});

const Cinema = loadable({
  loader: () => import('pages/Index/Cinema'),
  loading
});

const Origin = loadable({
  loader: () => import('pages/Index/Origin'),
  loading
});

const Rookie = loadable({
  loader: () => import('pages/Index/Rookie'),
  loading
});

const Crawler = loadable({
  loader: () => import('pages/Index/Crawler'),
  loading
});

const NotFound = loadable({
  loader: () => import('pages/Index/404'),
  loading
});

const render = () => (
  <Index>
    <Switch>
      <Route path="/" component={ Carousel } strict exact />
      <Route path="/carousel" component={ Carousel } />
      <Route path="/promote" component={ Promote } />
      <Route path="/e_sports" component={ ESports } />
      <Route path="/live" component={ Live } />
      <Route path="/full" component={ Full } />
      <Route path="/origin" component={ Origin } />
      <Route path="/cinema" component={ Cinema } />
      <Route path="/bangumi" component={ Bangumi } />
      <Route path="/rookie" component={ Rookie } />
      <Route path="/crawler" component={ Crawler } />
      <Route component={ NotFound } />
    </Switch>
  </Index>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ Login } />

        <Route path="/" render={ render } />

        <Route component={ Login } />
      </Switch>
    </Router>
  );
};

export default App;
