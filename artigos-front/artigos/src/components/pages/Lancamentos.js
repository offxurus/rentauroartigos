import React, { useEffect, useState } from 'react';
import './Lancamentos.css';

function Lancamentos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/tenis.json')
      .then(response => response.json())
      .then(setData);
  }, []);

  return (
    <div className='container-content'>
      <div className='container-list-product'>
        <div className="shoes-content">
          {data.map((item) => {
            const { id, name, price, oldPrice, image } = item;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                </div>
                <div className="price-item">
                  <span className="oldPrice-value">U$ {oldPrice}</span>
                  <span className="price-value">U$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lancamentos;
