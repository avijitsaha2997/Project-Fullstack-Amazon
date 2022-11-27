import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">

        <img
          className="home__image"
          src="https://bamazoncommytv.files.wordpress.com/2021/11/amazon-cracks-down-on-third-party-apps-over-privacy-.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="8723749"
            title="The core concept behind the Lean Startup approach is that a newly launched enterprise."
            price={29.99}
            image="https://pictures.abebooks.com/isbn/9789043030984-us-300.jpg"
            rating={3}
          />
          <Product
            id="4592758"
            title="Man’s Search for Meaning by Victor E. Fankl."
            price={29.99}
            image="https://cdn.lifehack.org/wp-content/uploads/2019/07/mans-search-for-meaning.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="9056235"
            title="ASUS TUF A17 2020 Version 17.3-inch FHD Gaming Laptop "
            price={1099.99}
            image="https://asusrog.com.bd/wp-content/uploads/2020/06/3-1-1.jpg"
            rating={4}
          />
          <Product
            id="1032456"
            title="i phone 14 pro max. The best mobile phone in apple history."
            price={799.99}
            image="https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Max-Deep-Purple-7900.jpg"
            rating={4}
          />
          <Product
            id="6576782"
            title="Logitech G develops award-winning wireless and wired gaming mice."
            price={59.99}
            image="https://static-01.daraz.com.bd/p/fefcff956a23fbebe37aa1d769c4e74e.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3968458"
            title="SAMSUNG 49” Odyssey G9 Gaming Monitor, 1000R Curved Screen."
            price={1299.99}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
