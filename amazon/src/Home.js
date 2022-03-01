import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Prime Video"
        />
        <div className="home__row">
          <Product
            id="1231264"
            title="No Rules Rules: Netflix and the Culture of Reinvention"
            price={29.99}
            image="https://ecsmedia.pl/c/no-rules-rules-w-iext97382645.jpg"
            rating={3}
          />
          <Product
            id="655123416"
            title="Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="51654968"
            title="Empire of Pain: The Secret History of the Sackler Dynasty"
            price={39.99}
            image="https://m.media-amazon.com/images/I/41FBvt7-FRL.jpg"
            rating={4}
          />
          <Product
            id="2159184"
            title="Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail"
            price={19.99}
            image="https://m.media-amazon.com/images/I/41c7pa262UL.jpg"
            rating={2}
          />
          <Product
            id="2315651"
            title="The Psychology of Money: Timeless lessons on wealth, greed, and happiness"
            price={9.99}
            image="https://m.media-amazon.com/images/I/41y1sBiezmL.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="2437862"
            title="LG 34WN80C-B UltraWide Monitor 34”"
            price={499.99}
            image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
