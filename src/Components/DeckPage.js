import React from 'react'
import Deck from './Deck'
import "./DeckPage.css";

function DeckPage() {
    return (
        <div className="deck-page">
            <div className="nav-buttons">
                <h1>COLLECTIONS</h1>
                <nav>
                <hr></hr>
                    <ul>
                        <li><button>Edit Deck</button></li>
                        <li><button>Share Deck</button></li>
                        <li><button>Delete Deck</button></li>
                    </ul>
                </nav>
                <hr></hr>
            </div>
            <div className="deck-cards">
                <ul>
                    <li>
                        <Deck deckNo="Deck1" deckName="ABCCC" value="6"/>
                    </li>
                    <li>
                        <Deck deckNo="Deck2" deckName="DBCCC" value="3"/>
                    </li>
                    <li>
                        <Deck deckNo="Deck3" deckName="XYZZZ" value="10"/>
                    </li>
                    <li>
                        <Deck deckNo="Deck4" deckName="LMNN" value="4"/>
                    </li>
                    <li>
                        <Deck deckNo="Deck5" deckName="BDCCC" value="5"/>
                    </li>
                    <li>
                        <Deck deckNo="Deck6" deckName="CADDD" value="8"/>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default DeckPage
