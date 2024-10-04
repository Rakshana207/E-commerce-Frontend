import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { tvData } from '../data/tv';
import { Link } from 'react-router-dom';

const MyTvPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleCheckboxChange = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]); 
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? tvData
    : tvData.filter(item => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {tvData.map((item) => (
            <div className='pro-input' key={`${item.brand}_${item.id}`}>
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedProduct.includes(item.brand)}
                  onChange={() => handleCheckboxChange(item.brand)}
                />
                {item.brand}
              </label>
            </div>
          ))}
        </div>
        <div className='pageSection'>
          {filteredProduct.map((item) => (
            <div key={item.id}>
              <Link to={`/tv/${item.id}`}>
                <div className='pageImg'>
                  <img src={item.image} alt={`TV: ${item.brand} ${item.model}`} />
                </div>
              </Link>
              <div className='proModel'>
                {item.brand}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyTvPage;
