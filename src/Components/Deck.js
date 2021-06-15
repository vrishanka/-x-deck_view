import React from 'react';
import "./Deck.css";
import Cards from './Cards';

import { useHistory } from "react-router-dom";


function Deck({ deckNo, deckName, value }) {
    let history = useHistory();
    return (
        <div className="container">
            <div className="deck">
                <div className="deck-text">
                    <span class="data">{deckNo}</span>
                    <h3>{deckName}</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div class="deck-stats">
                    <div class="stat">
                        <div class="value">{value}</div>
                        <div class="type">No of cards</div>
                    </div>	
                    <div class="stat">
                        <a><button onClick={() => { history.push("/Cards");}}>View me</button></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Deck
