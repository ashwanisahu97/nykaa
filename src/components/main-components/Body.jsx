import React from "react";
import { brands, topBrands, trendingData } from "../../data/bodyData";
import "../../styles/body.scss";
const Body = () => {
  return (
    <section className="body-container">
      <div className="trending-section">
        {trendingData?.map((element) => (
          <div className="trending">
            <img src={element?.image} alt="" />
          </div>
        ))}
      </div>
      <div className="brand-day-container">
        <p className="brand-day-title">Brand Of The Day</p>
        <div className="brand-banner">
          <img
            src="https://images-static.nykaa.com/uploads/d18437e6-6e8f-4ad5-84c6-466b1d8e8671.jpg?tr=w-2400,cm-pad_resize"
            alt=""
          />
        </div>
        <div className="brand-small-banner">
          {brands?.map((element) => {
            return (
              <div className="brand-box">
                <img src={element?.image} alt="" />
                <p className="brand-name">{element?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="top-brands-container">
        <div className="top-brands-title-container">
          <p className="top-brands-title">Explore Our Top Brands</p>
          <p className="top-brands-description">
            A-Lister labels to obsess over
          </p>
        </div>
        <div className="top-brands">
          {topBrands?.map((element) => (
            <div>
              <img src={element?.image} />
            </div>
          ))}
        <div className="arrow-button">
         <img src="https://images-static.nykaa.com/uploads/45d5a7b6-86eb-4850-9568-4d6ed91731fe.svg" alt="" />
        </div>
        </div>
        <div className="body-bottom-container">
          <img src="https://images-static.nykaa.com/uploads/38ef7f36-e799-4d44-a638-5943984c323f.jpeg?tr=w-400,cm-pad_resize" alt="" />
          <img src="https://images-static.nykaa.com/uploads/6e3783aa-6c6b-4a85-9eab-c7aaaa8ebdf0.jpg?tr=w-800,cm-pad_resize" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Body;
