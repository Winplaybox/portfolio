import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter,
} from "react-router-dom";
import './App.css';

import Header from './component/header'
import Footer from './component/footer'
import Overview from './pages/home'
import NotFound from "./component/notfound";
import Design from './pages/design'
import Aboutme from './pages/aboutme'
import Resume from './pages/resume'
import Education from './pages/education'
import Contactus from './pages/contact'
import EmptyPage from './pages/emptypage'

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

const Layout = withRouter(({ location }) => {
  return (
    <Router>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" id="wrapper">
          <Header/>
          <main className="mdl-layout__content" id="container">
            <Switch>
              <Route exact path="/portfolio" component={Overview}/>
              <Route exact path="/">
                <Redirect to="/portfolio" />
              </Route>
              <Route exact path="/designs" component={Design}/>
              <Route exact path="/portfolio/designs">
                <Redirect to="/designs" />
              </Route>
              <Route exact path="/aboutme" component={Aboutme}/>
              <Route exact path="/portfolio/aboutme">
                <Redirect to="/aboutme" />
              </Route>
              <Route exact path="/resume" component={Resume}/>
              <Route exact path="/portfolio/resume">
                <Redirect to="/resume" />
              </Route>
              <Route exact path="/education" component={Education}/>
              <Route exact path="/portfolio/education">
                <Redirect to="/education" />
              </Route>
              <Route exact path="/contact" component={Contactus}/>
              <Route exact path="/portfolio/contact">
                <Redirect to="/contact" />
              </Route>

              {/* <Route exact path="/emptypage" component={EmptyPage}/> */}
              <Route path="" component={NotFound} />
            </Switch>
          </main>
          <Footer/>
        </div>
    </Router>
  );
});

export default App;
