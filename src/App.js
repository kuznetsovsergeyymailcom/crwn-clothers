import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const HatsPage =()=>(
  <div>
    <h2>HatsPage</h2>
  </div>
);

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/hats/someid' component={HatsPage} />
    </Switch>
      
    </div>
  );
}

export default App;
