import React from 'react';
import { Component } from 'react';
import './Cards.css'
import { Data } from './data';
import Filter from './Filter.js';
import Products from './Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Cards extends Component {
    constructor() {
        super();
        this.state = {
          products: Data,
          sort: /*localStorage.getItem('sort')?JSON.parse(localStorage.getItem('sort')):*/'',
          cat: '',
        }
      }
      sorting = (e) => {
        const sorting = e.target.value;
    
        const sortRes = this.state.products.sort((a, b) => {
          if (sorting === 'all') {
            return a.id>b.id?1:-1
          }
    
          if (sorting === 'low') {
            return a.price>b.price?1:-1
          }
    
          if (sorting === 'high') {
            return a.price<b.price?1:-1
          }
        })
    
        this.setState({
          sort: sorting,
          products:sortRes
        }, () => {
          localStorage.setItem('sort', JSON.stringify(this.state.sort));
          localStorage.setItem('data', JSON.stringify(this.state.products));
        })
      }
      filtering = (e) => {
        let categ = e.target.value;
        if (categ === 'all') {
          this.setState({
          cat: categ,
          products:Data
        })
        }
        else {
          this.setState({
            cat: categ,
            products: Data.filter(product => {
              return product.category.indexOf(e.target.value)>=0
            })
          })
        }
      }
      render() {
        return (
          <div className="cards">
            <div className="header-bar">
              <div className="heading">
                <h1>DeckName</h1>
              </div>
              <div className="filter-bar">
                <FontAwesomeIcon icon={['fas','filter']}></FontAwesomeIcon>
                <i class="cis-filter"></i>
                <h3>Filter</h3>
                <Filter
                sorting={this.sorting}
                sorts={this.state.sort}
                filtering={this.filtering}
                cat={this.state.cat}
                />
              </div>
            </div>
            
            <Products products={this.state.products} />
          </div>
        );
      }
}

export default Cards
