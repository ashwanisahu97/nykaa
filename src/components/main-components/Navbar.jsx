import React from "react";
import "../../styles/navbar.scss";
import { MdOutlineAppShortcut } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { brands, trendingData } from "../../data/brandData";

const Navbar = () => {
  return (
    <div className="main-container">
      <div className="navbar-top-strip">
        <div className="sale-container">
          <div className="marquee-container">
            <p className="marquee-content">
              Pay day sale is live - Up to 50% off in Salary Saving Steals
            </p>
          </div>
        </div>
        <div className="info-container">
          <div className="app-icon">
            <MdOutlineAppShortcut />
            <p>Get App</p>
          </div>
          <div className="store-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>address icon</title>
              <g opacity=".92" fill="#000">
                <path d="M12 8a2.01 2.01 0 110 4 2.01 2.01 0 110-4zm0-1.5a4 4 0 00-.68.06 3.5 3.5 0 00.68 6.93 3.5 3.5 0 000-7v.01z"></path>
                <path d="M12 3.5a6.94 6.94 0 012.22.37 6.53 6.53 0 014.28 6.47 6.6 6.6 0 01-1.78 4.49L12 20.24l-4.7-5.38a6.94 6.94 0 01-1.8-4.65A6.62 6.62 0 0112 3.5zM12 2a8.09 8.09 0 00-8 8.21 8.42 8.42 0 002.15 5.61l5.1 5.83a1.001 1.001 0 001.5 0l5.1-5.83A8.05 8.05 0 0020 10.36a8 8 0 00-5.31-7.91A8.34 8.34 0 0012 2z"></path>
              </g>
            </svg>
            <p>Store & Events</p>
          </div>
          <div className="gift-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>giftcard icon</title>
              <g opacity=".92" fill="#000">
                <path d="M16 15.6h2.2a.6.6 0 000-1.2H16a.6.6 0 000 1.2z"></path>
                <path d="M21 4.5H3a1 1 0 00-1 1v13a1 1 0 001 1h18a1 1 0 001-1v-13a1 1 0 00-1-1zM3.5 6h4.9v1.66a2.12 2.12 0 00-.69-.47 1.9 1.9 0 00-.39-.11 1.75 1.75 0 00-.4 0c-.258 0-.513.05-.75.15a2.12 2.12 0 00-.69.47 2.23 2.23 0 000 3c.078.077.166.144.26.2H3.5V6zM8 10.32a4.709 4.709 0 01-1.7-.45 1 1 0 010-1.38.86.86 0 01.61-.25.85.85 0 01.61.25A4.47 4.47 0 018 10.32zM8.4 18H3.5v-5.9H7l-1.42 1.38a.59.59 0 000 .85.6.6 0 00.84 0l2-2L8.4 18zm12.1 0H9.6v-5.65l2 2a.6.6 0 00.974-.656.59.59 0 00-.134-.194l-1.39-1.4h9.45V18zM10 10.32a5.16 5.16 0 01.46-1.83.85.85 0 01.61-.25.86.86 0 01.61.25 1 1 0 010 1.37 4.42 4.42 0 01-1.68.46zm10.48.58h-8.15a1.45 1.45 0 00.23-.19 2 2 0 00.26-.33 2.22 2.22 0 000-2.38 1.64 1.64 0 00-.26-.33 1.579 1.579 0 00-.32-.27 1.9 1.9 0 00-.37-.2 2.13 2.13 0 00-1.57 0 2.23 2.23 0 00-.69.47V6H20.5l-.02 4.9z"></path>
              </g>
            </svg>
            <p>Gift Card</p>
          </div>
          <div className="help-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>help icon</title>
              <g opacity=".92" fill="#000">
                <path d="M12 4.5c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5S7.9 4.5 12 4.5zM12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z"></path>
                <path d="M12 16.4a.8.8 0 100-1.6.8.8 0 000 1.6zM12 13.6c-.4 0-.7-.3-.8-.8v-1.4c0-.4.3-.8.8-.8.6 0 1.2-.5 1.2-1.1 0-.6-.5-1.2-1.1-1.2-.6 0-1.2.5-1.2 1.1 0 .4-.3.8-.8.8s-.7-.2-.7-.7c0-1.5 1.2-2.6 2.7-2.6 1.5 0 2.6 1.2 2.6 2.7 0 1.2-.8 2.2-1.9 2.5v.8c-.1.4-.4.7-.8.7z"></path>
              </g>
            </svg>
            <p>Help</p>
          </div>
        </div>
      </div>
      <div className="navbar-middle-strip">
        <div className="brand-container">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 250">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M157.9 57.2c5-9.6-11.2-6.9-11.2-6.9-5.8 0-8.4 7-9.6 9l-17.5 34.5c-3.3 5.7-14.2 30.1-17.8 35.5-.3-5.5.1-16.5.2-19.1.7-10.4 1.4-18.3 2.5-27.8.8-7.4 2.4-15.7.9-23.1-1-4.6-2.5-4.9-9.1-5.6-6.9-.7-11.6 9.3-13.9 14-8.4 17.4-17.8 34.4-25.3 52.2-2.2 5.2-4.9 10.4-7.2 15.5-2.7 6.2-5.2 12.3-8.1 18.4-3.1 6.4-12.8 27.4-15.5 34-3 7.2-3.6 13 8.4 12.7 1.9 0 6.1.4 11.3-5.2 4.1-4.4 4.9-8.5 7.3-14.6 8.6-21.6 14.7-35.9 24.1-57.3.9-2.1 3-8.2 5.1-12.9-.1 6.7-1.2 14.7-1.7 20-1.6 19.4-2.7 38.1-4.4 57.3-.2 2.6-.9 5.7.3 8.1 1.2 2.4 4.2 3 6.6 3.3 9.6 1.2 10.6-3.6 13.6-10.2 2.7-5.9 4.3-10.7 6.7-16.7 7.4-18.5 15.2-36.8 23.8-54.8 2.2-4.6 4.4-9.1 6.8-13.6 4.4-8.3 8-16.1 12.8-25.3 3.6-6.6 7.1-14.1 10.9-21.4zm329.5 52.1c-1.1-11.1-16.3-5.5-25.4-3.8-3.4.6-13.9 2.6-26 4.9-.5-12.5-.3-10-.4-17.6-.3-11-.9-19.6-1.5-29.3-.4-6.1-1.3-14.6-12.3-13-12.8 1.8-14.9 8.2-18.3 15.9-8.9 20.1-8.6 20.2-18.7 42.6-.8 1.7-4.5 10.7-5.1 12.5-.4.1-1.2.3-2.2.6-4.1.9-9.1 2-14.6 3.2l.1-.5c1.3-10.2 2.9-20.4 4.3-30.6 1.3-9.3 2.7-24.5 3.8-33.8 1.2-10-10.4-9.8-10.4-9.8-7.1-.4-9.8 1.7-14.3 7.5-7.7 10-17 20.8-25.2 31.8-14.9 19.9-25.8 34.9-39.3 54.9-3.9 5.8-9.9 14.6-15.1 21.5-3.5-6.9-6.5-14.5-9.4-21.5-4.2-10-7.3-16.2-9.3-22.8-1.8-5.8.4-6.6 4.7-9.9 12.4-9.4 26.4-15.9 39.1-24.9 9-6.4 19.8-13.5 28.6-20.1 0 0 5.1-3 7.9-6.8 3.5-4.8-6.4-9.8-6.4-9.8-5.6-.9-8.7.4-12.6 2.2-4 1.8-9.2 5.9-12.6 8.6-7.5 5.8-17 12.7-24.4 18.5-9.1 7.1-15.3 11.5-25.3 17.4l25.4-38c8.3-10.7-13.7-13.7-22.1-2.4-7.8 10.1-13.1 19-19.2 28.2-14.7 21.9-26.8 44.9-38.9 69-4.6 9.2-9.1 18.8-13.3 28.3-2 4.6-7.9 15.2.2 16.3 17.3 2.2 20.1-6 24-15.9 6.4-16.3 8.5-19.3 12.6-29.4 4-9.8 6.9-15.4 11.4-23.8.1-.1 1.4-2.2 1.4-2.2.8 1.7 6.1 19.3 6.8 21.3 3.6 9.5 9.9 31.7 13.5 41.8 2.6 8.4 3.3 10.8 14.6 10.5 5.6-.1 8-2.3 11.7-9.3s19.7-36.8 19.7-36.8c4.8-.8 11.7-2 16.2-2.8.8-.1 2.6-.5 5.1-1 1.7-.2 3.1-.5 4.2-.8.1 0 .1 0 .2-.1 4.4-.9 10-2 16.1-3.2-1.1 5.5-4.5 17.6-5.2 20.7 0 0-7.4 28.8 2.2 30.3 6 .9 9.1-.1 9.1-.1 11.2-1.3 11.4-16.4 11.4-16.4l6.1-39.1c4.4-.9 8.8-1.8 13.1-2.6l-13.2 44.6c-1.9 6.3-3.3 14.4 8 14.4 9.2.5 9.8-5.3 9.8-5.3.2-.9 7.5-24.4 9.3-32.8 1.2-5.4 5.5-19.3 7.2-24.9 4.8-.9 8.4-1.6 10.1-1.9 2-.3 5.9-1 11-1.8-.1 5.2 0 12.4.1 13.4 1.1 15.8-.1 32.2 3.2 47.7.5 2.5 1.5 5.7 4.7 5.7 3.8 0 5-.4 9-.7 11.6-1 9.5-12.7 8.8-20.1-.8-8.2-1.6-15.1-2.7-23.3-.9-6.7-1.5-15.5-1.6-26.1v-.2c19-3.2 39.5-6.7 42.5-7.2 4.8-1.3 8.8-.9 7.8-11.9zm-148.5 21c0 .1-.1.1-.1.2-13.3 2.9-25.8 5.7-32.8 7.3 7-11.7 37.8-54.3 42.5-59.3-2.6 13.2-6.8 37.7-9.6 51.8zm76.8-16.8v.7c-6.4 1.2-12.4 2.4-17.2 3.3 6.1-15.8 12.5-35.2 16.3-45-.3 7.3 1.2 33.8.9 41zM229.2 66.4c2-3.7 6.5-11 .9-13.8-3.3-1.6-7.7-2.6-11.1-.9-2.8 1.5-4.9 4.4-6.3 7.1l-21.4 33.7c-3.5 4.8-6.8 10.8-13.9 11.6-4.7.5-8.1-1.5-8-5.7.1-4.3 2.6-10 4.5-13.7 5.6-10.6 6.3-14.2 11.7-24.7 5.2-10.1-11.8-12.4-16-5.1-3 5.2-8.8 15-10.1 18.3-2.4 6-20.4 34.6-12.6 45.9 10 12.8 36.6-7.4 23 15.9-11 18.7-17.9 29.4-27.5 46.7-2.1 3.7-4.7 7.4-5.4 11.8-1 6.2 7.5 6.1 11.2 5.9 6.5-.5 9.6-3.5 12.2-9.4 1.4-3.1 3.3-6.9 4.7-10 12.6-27.5 26-51.4 42.6-78 7.9-12.6 14.9-23.4 21.5-35.6z"
                fill="#fc2779"
              ></path>
            </svg>
          </div>
          <p className="category">Category</p>
          <p className="brands">Brands</p>
          <p className="luxe">Luxe</p>
          <p className="nykaa-fashion">Nykaa Fashion</p>
          <p className="beauty-advice">Beauty Advice</p>
        </div>
        <div className="search-container">
          <div className="search">
            <div className="input-container">
              <div className="search-icon">
                <IoSearchOutline />
              </div>
              <input type="text" className="search-box" />
            </div>
          </div>
          <div className="account-container">
            <button className="signin-button">Sign in</button>
          </div>
          <div className="bag-container">
            <div className="bag">
              <BsHandbag className="bag-icon" />
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-bottom-strip">
        <p className="Makeup">Makeup</p>
        <p className="Skin">Skin</p>
        <p className="Hair">Hair</p>
        <p className="Appliances">Appliances</p>
        <p className="Bath-and-Body">Bath & Body</p>
        <p className="Naturals">Naturals</p>
        <p className="Mom-and-Baby">Mom & Baby</p>
        <p className="Health-and-Wellness">Health & Wellness</p>
        <p className="Men">Men</p>
        <p className="Fragrance">Fragrance</p>
        <p className="Popups">Pop Ups</p>
        <div className="offers">Offers</div>
      </div>
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
                  <p className="brand1-name">{element?.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
