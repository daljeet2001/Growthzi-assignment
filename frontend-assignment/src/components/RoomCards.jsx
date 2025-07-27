import React from "react";
import { FaUser, FaBed, FaWifi, FaBath, FaCoffee, FaSnowflake,FaDog,FaTv,FaSwimmer } from "react-icons/fa";


function RoomCards() {
  return (
    <section className="room-cards">
      <span className="line"></span>
      <h5 className="section-subtitle">OUR ROOM CHOICES</h5>
      <h2 className="section-title">Luxury Rooms & Suites</h2>

      <div className="cards">
     
      <div className="full-card">
      <div className="room-row">
      <div className="room-card">
      <h4 className="room-title">Superior Suite</h4>
      <p className="room-price">$300/Night</p>
      
      <div className="divider"></div>

      <div className="room-icons">
        <span><FaUser size={10} /> 1-2 Persons</span>
        <span><FaBath size={10} /> Bathtub</span>
        {/* <span><FaCoffee size={10} /> Free Breakfast</span> */}
        <span><FaBed size={10} /> King Size Bed</span>
        <span><FaWifi size={10} /> Free Wifi</span>
        <span><FaSnowflake size={10} /> Air Conditioner</span>
        <span><FaDog size={10} /> Pet Friendly</span>
  
      </div>

      <div className="room-card-footer">
        <span className="details-btn">Details →</span>
        <button className="book-btn">Book Now →</button>
      </div>
      </div>

      <div className="room-placeholder"></div>
      </div>
      </div>
 

      <div className="full-card-2">
      <div className="room-row-2">

      <div className="room-card-2">
      <h4 className="room-title">Junior Suite</h4>
      <p className="room-price">$270/Night</p>
      
      <div className="divider"></div>

      <div className="room-icons">
        <span><FaUser size={10} /> 1-2 Persons</span>
        <span><FaBath size={10} /> Bathtub</span>
        {/* <span><FaCoffee size={10} /> Free Breakfast</span> */}
        <span><FaBed size={10} /> King Size Bed</span>
        <span><FaWifi size={10} /> Free Wifi</span>
        <span><FaSnowflake size={10} /> Air Conditioner</span>
        <span><FaDog size={10} /> Pet Friendly</span>
  
      </div>

      <div className="room-card-footer">
        <span className="details-btn">Details →</span>
        <button className="book-btn">Book Now →</button>
      </div>
      </div>

      <div className="room-placeholder-2"></div>

      </div>
      </div>
      
      <div className="full-card">
      <div className="room-row">

      <div className="room-card">
      <h4 className="room-title">Deluxe Suite</h4>
      <p className="room-price">$210/Night</p>
      
      <div className="divider"></div>

      <div className="room-icons">
        <span><FaUser size={10} /> 1-2 Persons</span>
        <span><FaBath size={10} /> Bathtub</span>
        {/* <span><FaCoffee size={10} /> Free Breakfast</span> */}
        <span><FaBed size={10} /> King Size Bed</span>
        <span><FaWifi size={10} /> Free Wifi</span>
        <span><FaSnowflake size={10} /> Air Conditioner</span>
        <span><FaDog size={10} /> Pet Friendly</span>
  
      </div>

      <div className="room-card-footer">
        <span className="details-btn">Details →</span>
        <button className="book-btn">Book Now →</button>
      </div>
      </div>

      <div className="room-placeholder"></div>
      </div>

     
      </div>
    

      </div>


    </section>
  );
}

export default RoomCards;
