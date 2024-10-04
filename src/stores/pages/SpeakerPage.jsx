import React, { useState } from 'react';
import { speakerData } from '../data/speaker';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const SpeakerPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (brand) => {
        if (selectedProduct.includes(brand)) {
            setSelectedProduct(selectedProduct.filter(item => item !== brand));
        } else {
            setSelectedProduct([...selectedProduct, brand]);
        }
    };

    const filteredProduct = selectedProduct.length === 0 ? speakerData : speakerData.filter((item) => selectedProduct.includes(item.brand));

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {speakerData.map((speaker) => (
                        <div className="pro-input" key={speaker.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProduct.includes(speaker.brand)}
                                    onChange={() => companyHandler(speaker.brand)}
                                />
                                {speaker.brand}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="pageSection">
                    {filteredProduct.map((item) => (
                        <div key={item.id}>
                            <Link to={`/speakers/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            <div className="proModel">
                            {item.brand}, {item.model}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
);
}
export default SpeakerPage