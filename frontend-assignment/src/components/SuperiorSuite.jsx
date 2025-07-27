import React from 'react';
import { Hotel, CalendarDays } from 'lucide-react';
import { Wifi, BedDouble, Bath, Ban, Snowflake, Utensils, Users } from 'lucide-react';

const SuperiorSuite = () => {
  return (
    <div className="superior-suite">
      <div className="left-panel">
        <h1 className="suite-title">Superior Suite</h1>
        <p className="suite-description">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="suite-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className="check-times">
          <div className="check-item">
            <Hotel className="check-icon" />
            <div>
              <div className="check-label">Check In</div>
              <div className="check-time">12:00 PM</div>
            </div>
          </div>
          <div className="check-item">
            <Hotel className="check-icon" />
            <div>
              <div className="check-label">Check Out</div>
              <div className="check-time">11:00 AM</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Room Amenities</h3>
          <ul className="grid-list">
            <li><Users size={16} /> 1-2 Persons</li>
            <li><Bath size={16} /> Bathtub</li>
            <li><Utensils size={16} /> Free Breakfast</li>
            <li><Ban size={16} /> No Smoking</li>
            <li><BedDouble size={16} /> King Size Bed</li>
            <li><Wifi size={16} /> Free Wifi</li>
            <li><Snowflake size={16} /> Air Conditioner</li>
            <li><BedDouble size={16} /> Extra Bed ($15)</li>
           </ul>
        </div>

        <div className="section">
          <h3>Available Offers</h3>
          <ul className="grid-list">
            <li>Welcome Snacks</li>
            <li>Daily Complementary Drink</li>
            <li>Free High Speed Wifi</li>
            <li>Free Late Check Out & Early Check In</li>
            <li>10% Discount For Tour Service</li>
            <li>Breakfast Between The Trip</li>
          </ul>
        </div>

        {/* <div className="section">
          <h3>Room Rules</h3>
          <ul className="rules-list">
            <li>No Pet Allowed</li>
            <li>Child Under 3 Years Old Free Charge</li>
            <li>If Capacity Exceeded, Extra Bed Required</li>
            <li>Smoking Will Be Penalized</li>
          </ul>
        </div> */}
      </div>

      <div className="right-panel">
        <div className="reserve-box">
          <div className="reserve-header">
            <span>Reserve :</span>
            <span className="price">$300/Night</span>
          </div>

          <label>Check In</label>
          <div className="input-wrapper">
            <input type="date" />
            {/* <CalendarDays size={16} /> */}
          </div>

          <label>Check Out</label>
          <div className="input-wrapper">
            <input type="date" />
            {/* <CalendarDays size={16} /> */}
          </div>

        <div className="row-selects">
        <div className="select-group">
            <label htmlFor="room-select">Room</label>
            <select id="room-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </select>
        </div>

        <div className="select-group">
            <label htmlFor="guest-select">Guest</label>
            <select id="guest-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </select>
        </div>
        </div>


          <button className="check-btn">Check Availability</button>

          <div className="extra-service">
            <p>Extra Service : <span className="daily-rate">$35/Daily</span></p>
            <label><input type="checkbox" defaultChecked /> Room Cleaning</label>
            <label><input type="checkbox" /> Drinks Included</label>
            <label><input type="checkbox" /> Room Breakfast</label>
          </div>

          <div className="total-cost">
            <p>Total Cost :</p>
            <p className="total-price">$335</p>
          </div>

          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SuperiorSuite;
