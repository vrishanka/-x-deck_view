import React, {Component, useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import StarIcon from '@material-ui/icons/Star';
import img1 from './images/mobile.jpg'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    render() {
        const { product } = this.props;
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div className="front-card">
                    <div className="front">
                        <div className="card-img">
                            <img src={this.props.product.img} alt="no photo" width='200px' height="200px" />
                        </div>
                        <div className="rate">
                        <StarIcon className="star" />

                            <div className="star"></div>
                            <h4>{product.rate}</h4>
                        </div>
                        <div className="cardInfo">
                            <h1>{product.title}</h1>
                            <p>{product.desc}</p>
                        </div>
                        <div className="action">
                            <div className="price">
                                <h3>₹{product.price}</h3>
                            </div>
                            <div className="cart">
                                <svg className="outCart" xmins="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path d="M2 6h10l10 40h32l8-24H16"></path>
                                    <circle cx="23" cy="54" r="4"></circle>
                                    <circle cx="49" cy="54" r="4"></circle>
                                </svg>
                            </div>
                            <div className="btn">
                                <button onClick={this.handleClick}>
                                    <a>View detail</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back-card" onClick={this.handleClick}>
                    <div className="back-cardInfo">
                        <h1>Product Details</h1>
                        <p>{product.back_desc}</p>
                    </div>
                    <div className="back-btn">
                        <button className="bbtn buy-btn">Buy Now</button>
                        <button className="bbtn cart-btn">Add to Cart</button>
                    </div>
                </div>
            </ReactCardFlip>
        )
    }
}
export default Product
