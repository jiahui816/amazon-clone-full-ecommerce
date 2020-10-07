import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-fe.ssl-images-amazon.com/images/G/35/prime/gateway/v2/DesktopHero_Prime_3000x1200_v1_11._CB428394570_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="212351"
            title="Humans Hardcover"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51pXkpstgcL._SX404_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="48464"
            title="40W Bluetooth Speaker 5.0 Digital Alarm Clock"
            price={59.49}
            image="https://images-na.ssl-images-amazon.com/images/I/61NlKZgfTYL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="546846"
            title="Philips Hue White Filament Single Smart LED Bulb [E27 Edison Screw] with Bluetooth"
            price={24.53}
            image="https://images-na.ssl-images-amazon.com/images/I/61LalkKznwL._AC_SL1200_.jpg"
            rating={4}
          />
          <Product
            id="5468462"
            title="XP-PEN Artist12 Pro 11.6 Inch Drawing Monitor "
            price={369.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71nvkMGYL8L._AC_SL1497_.jpg"
            rating={5}
          />
          <Product
            id="798956"
            title="Echo Dot (3rd Gen) "
            price={79.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61MdyHSbxHL._AC_SL1100_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="7965548"
            title="LG 22MN430M-B 22 FHD IPS Monitor 5ms (GTG)"
            price={249.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81d5Szt%2BV-L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
