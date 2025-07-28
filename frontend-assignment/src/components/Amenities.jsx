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
  FaEdit,
} from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

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

const [isEditing, setIsEditing] = useState(false);
const [descriptionText, setDescriptionText] = useState(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
);
const [tempText, setTempText] = useState(descriptionText);

const handleSave = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/update-section", {
      description: tempText,
    });

    if (response.status === 200) {
      setDescriptionText(tempText);
      setIsEditing(false);
    }
  } catch (error) {
    console.error("Error saving description:", error);
  }
};

  return (
    <div className="amenities-container">
      <div className="amenities-header">
        <div className="aligned-block">
         <div className="vertical-line" />
          <p className="amenities-subtitle">THE ESSENTIAL IN-ROOM AMENITIES</p>
          <h2 className="amenities-title">We Have What You Need</h2>
          <div className="amenity-edit-wrapper">
    <div className="amenity-edit-inner">
      {!isEditing ? (
        <p
          className="amenity-description-text"
          onClick={() => setIsEditing(true)}
        >
          {descriptionText}
        </p>
      ) : (
        <div className="amenity-edit-box">
          <textarea
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            rows={3}
            className="amenity-edit-textarea"
          />
          <div className="amenity-edit-buttons">
            <button onClick={handleSave} className="btn-save">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="btn-cancel">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
          </div>
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

