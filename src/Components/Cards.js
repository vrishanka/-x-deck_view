import React from 'react';
import Card from './Card.js';
import img from './card.png';
import "./Cards.css"

function Cards() {
    return (
        <div className="cards-page">
            <div className="deck-name"><h1>Deck 1</h1></div>
            <div className="list">
                <ul>
                    <li>
                        <Card
                        title="item1"
                        imgUrl={img}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, diam quis cursus lacinia, ipsum lectus porttitor arcu, ut lacinia nunc ligula quis nisl. Vestibulum nec pharetra dui, in lobortis tellus"
                        />
                    </li>
                    <li>
                        <Card
                        title="item2"
                        imgUrl={img}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, diam quis cursus lacinia, ipsum lectus porttitor arcu, ut lacinia nunc ligula quis nisl. Vestibulum nec pharetra dui, in lobortis tellus"
                        />
                    </li>
                    <li>
                        <Card
                        title="item3"
                        imgUrl={img}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, diam quis cursus lacinia, ipsum lectus porttitor arcu, ut lacinia nunc ligula quis nisl. Vestibulum nec pharetra dui, in lobortis tellus"
                        />
                    </li>
                    <li>
                        <Card
                        title="item4"
                        imgUrl={img}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, diam quis cursus lacinia, ipsum lectus porttitor arcu, ut lacinia nunc ligula quis nisl. Vestibulum nec pharetra dui, in lobortis tellus"
                        />
                    </li>
                    <li>
                        <Card
                        title="item5"
                        imgUrl={img}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, diam quis cursus lacinia, ipsum lectus porttitor arcu, ut lacinia nunc ligula quis nisl. Vestibulum nec pharetra dui, in lobortis tellus"
                        />
                    </li>
                    <li>
                        <Card
                        title="item6"
                        imgUrl={img}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, diam quis cursus lacinia, ipsum lectus porttitor arcu, ut lacinia nunc ligula quis nisl. Vestibulum nec pharetra dui, in lobortis tellus"
                        />
                    </li>
                </ul>             
            </div>
        </div>
    )
}

export default Cards
