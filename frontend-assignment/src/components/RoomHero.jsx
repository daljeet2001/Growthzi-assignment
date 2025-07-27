import React from "react";
import Navbar from "../components/navbar";

function RoomHero() {
  return (
    <section className="room-hero">
      <Navbar />
      <div className="room-hero-content">
        <div className="line-and-subtitle">
          <span className="line"></span>
          <span className="subtitle">OUR ROOM</span>
        </div>
        <h1>Discover The Best Room For You</h1>
      </div>
    </section>
  );
}

export default RoomHero;
