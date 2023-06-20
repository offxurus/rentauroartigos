import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';
import banner3 from '../../img/banner3.jpg';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then(response => response.json())
      .then(setData);
  }, []);

  const [position, setPosition] = useState(0);

  const handleLeftClick = () => {
    setPosition(position - 1);
  };

  const handleRightClick = () => {
    setPosition(position + 1);
  };

  if (!data || data.length === 0) return null;

  return (
    <div className="container-list-product">
      <div className="conteudo">
        <Carousel
          slidesToShow={3}
          slidesToScroll={1}
          slideIndex={position}
          wrapAround={true}
        >
          {data.map((item) => {
            //console.log(item)
            const { id, name, price, oldPrice, image } = item;
            return (
              <Carousel.Item className="item" key={id}>
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">U$ {oldPrice}</span>
                  <span className="price">U$ {price}</span>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className='banner-container'>
      <div className="image-banner">
        <img src={banner1} alt="banner1" />
      </div>
      <div className="image-banner">
        <img src={banner2} alt="banner2" />
      </div>
      <div className="image-banner">
        <img src={banner3} alt="banner3" />
      </div>
    </div>
    </div>
  );
}

export default Home;
