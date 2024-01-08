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
        </div>
      </div>
    </section>
  );
};

export default Body;
