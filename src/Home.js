import React from "react";
import Product from "./Product.js";
import "./Home.css";
import Header from "./Header.js";
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner__image"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="12321342"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="data:image/jpeg;base64,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"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321343"
            title="Ring Fit Adventure - Nintendo Switch"
            price={114.91}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51ZIQxjxTxL._AC_US436_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321344"
            title="Oculus Rift S PC-Powered VR Gaming Headset"
            price={399}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ueGFutGgL._AC_UY218_.jpg"
          />

          <Product
            id="12321345"
            title="Cracking the Coding Interview: 189 Programming Questions and Solutions"
            price={26.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SY344_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321346"
            title="amsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </>
  );
}
export default Home;
