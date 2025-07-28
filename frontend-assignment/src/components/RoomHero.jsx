import React from "react";
import Navbar from "../components/navbar";
import CustomButtonEditor from "../components/CustomButtonEditor"
function RoomHero() {
  return (
    <section className="room-hero">
      <Navbar />
      <div className="room-hero-content">
           
        <div className="line-and-subtitle">
          <span className="line"></span>
          <span className="subtitle">OUR ROOM</span>  
        </div>
        <div className="heading-button">
        <h1>Discover The Best Room For You <CustomButtonEditor/></h1>
        </div>
      </div>
 
    </section>
  );
}

export default RoomHero;
