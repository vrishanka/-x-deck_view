
import './App.css';
import DeckPage from './Components/DeckPage';
import Cards from './Components/Cards.js';
import Card  from './Components/Card';
import Deck from './Components/Deck';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/DeckPage" component={DeckPage} />
            <Route exact path="/Deck" component={Deck} />
            <Route exact path="/Cards" component={Cards} />
            <Route exact path="/Card" component={Card} />

          </Switch>
        </Router>
      </div>
  );
}

export default App;
