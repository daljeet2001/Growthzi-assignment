import React from "react";
import Navbar from "../components/navbar";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

function RoomHero2() {
  return (
    <section className="room-hero2">
    <Navbar />
    <div className="room-hero2-content">
        <button className="room-hero2-arrow room-hero2-left">
        <ChevronLeft />
        </button>
        <button className="room-hero2-arrow room-hero2-right">
        <ChevronRight />
        </button>
    </div>
    </section>

  );
}

export default RoomHero2;
