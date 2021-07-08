import React from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeckPage from './Components/DeckPage';
import Cards from './Components/Cards';
import Deck from './Components/Deck';
import Products from './Components/Products';
import Product from './Components/Product';
import Filter from './Components/Filter';




function App() {
  return (
      <div className="App">
      <Header />
        <Router>
          
          <Switch>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/DeckPage" component={DeckPage} />
            <Route exact path="/Deck" component={Deck} />
            <Route exact path="/Cards" component={Cards} />
            <Route exact path="/Product" component={Product} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Filter" component={Filter} />
            
          

          </Switch>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;


