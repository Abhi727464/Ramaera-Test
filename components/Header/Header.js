import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <div className="container">
    <div className="header">
      <nav>
        <div className="logo">
          <img
            src={logo}
            alt=""
          />
        </div>
        <div className="navbar">
          <div>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">OUR INDUSTRIES </a>
              </li>
              <li>
                <a href="">OUT COMPANIES</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <SearchIcon
                  style={{ fontSize: "30px", color: "white", marginTop: "5px" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main-content">
        <div className="main-head">
           <h1 >Ramaera <br /> Industries</h1>
            
        </div>
        <div >
          <p className="info">
            An incredible multi-industrial approach oriented towards financial
            independence, customer focus and serving the best quality to the
            people.
          </p>
        </div>
        <div>
            <button className="explore-btn">Explore More</button>
        </div>
        <div className="icons">
            <span><TwitterIcon style={{fontSize:'30px'}}/></span>
           <span><FacebookIcon style={{fontSize:'30px'}}/></span> 
           <span><InstagramIcon style={{fontSize:'30px'}}/></span> 
        </div>
      </div>
    </div>
    {/* header finished */}
    

    </div>
  );
};

export default Header;
