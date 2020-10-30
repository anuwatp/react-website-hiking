import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import PlacesToGo from './components/pages/PlacesToGo';
import Trolltunga from './components/pages/places/Trolltunga';
import Besseggen from './components/pages/places/Besseggen';
import Ryten from './components/pages/places/Ryten';
import Kjerag from './components/pages/places/Kjerag';
import Preikestolen from './components/pages/places/Preikestolen';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/places-to-go/trolltunga' component={Trolltunga} />
          <Route path='/places-to-go/besseggen' component={Besseggen} />
          <Route path='/places-to-go/ryten' component={Ryten} />
          <Route path='/places-to-go/kjerag' component={Kjerag} />
          <Route path='/places-to-go/preikestolen' component={Preikestolen} />
          <Route path='/places-to-go' component={PlacesToGo} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
