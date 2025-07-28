import React from "react";
import {
  FaWifi,
  FaConciergeBell,
  FaShower,
  FaHotel,
  FaLock,
  FaCoffee,
  FaFireExtinguisher,
  FaTooth,
} from "react-icons/fa";


const amenities = [
  { icon: "/icons/free-wifi.png", title: "High Speed Wifi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "/icons/cuisine.png", title: "24 Hours Receptionist", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "/icons/cleaning-cart.png", title: "Self Laundry", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "/icons/bed.png", title: "Upgrade Room", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "/icons/online-booking.png", title: "Security & Safety", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "/icons/amenities.png", title: "Welcome Drink", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "/icons/fireman.png", title: "Firefighters", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "/icons/cuisine.png",title: "Beauty Kits", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const Amenities = () => {
  return (
    <div className="amenities-container">
      <div className="amenities-header">
        <div className="aligned-block">
         <div className="vertical-line" />
        <p className="amenities-subtitle">THE ESSENTIAL IN-ROOM AMENITIES</p>
        <h2 className="amenities-title">We Have What You Need</h2>
        <p className="amenities-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> 
          sed do eiusmod tempor.
        </p>
      </div>
      </div>

      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div className="amenity-item" key={index}>
          <div className="amenity-icon">
          <img src={item.icon} alt={`${item.title} icon`} width={32} height={32} />
          </div>
            
            <h3 className="amenity-title">{item.title}</h3>
            <p className="amenity-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;

