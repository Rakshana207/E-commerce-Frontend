import React, { useState } from 'react';
import { computerData } from '../data/computers';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const CompPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company));
        } else {
            setSelectedProduct([...selectedProduct, company]);
        }
    };

    const filteredProduct = selectedProduct.length === 0 ? computerData : computerData.filter((item) => selectedProduct.includes(item.company));

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {computerData.map((item) => (
                        <div className='pro-input' key={item.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProduct.includes(item.company)}
                                    onChange={() => companyHandler(item.company)}
                                />
                                {item.company}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='pageSection'>
                    {filteredProduct.map((item) => (
                        <div key={item.id}>
                            <Link to={`/computers/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            <div className="proModel">
                                {item.company}, {item.model}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CompPage;
