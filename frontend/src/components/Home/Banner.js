import React from "react";
import logo from "../../imgs/logo.png";

const searchBox = {
  padding: '0.5rem',
  margin: '0.3rem',
  borderRadius: '0.5rem'
};

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span>
            <input style={searchBox} type="text" id="search-box" placeholder="What is that you truly desire?"/>
          </span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
