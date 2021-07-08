import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqmbL0gIesd_MzGfBylK-guOZeCQNMCfJig&usqp=CAU"
            />

        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
        </div> 

         <div className="header__nav">
        
            <div className="header__option">
                <span className="header__optionLineOne">Hello Guest</span>
                <span className="header__optionLineTwo">Sign In</span>
            </div>
        
          
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        
      </div>

        </div>
        
    )
}

export default Header