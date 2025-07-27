import React from "react";

const services = [
  { title: "Room Cleaning", price: "$35/Daily", showButton: true },
  { title: "Drinks Included", price: "$25/Daily", showButton: false },
  { title: "Room Breakfast", price: "$15/Daily", showButton: false },
];

const ExtraServices = () => {
  return (
    <div className="extra-services-container">
      <div className="header">
        <div className="line" />
        <p className="subtitle">BEST PRICES</p>
        <h2 className="title">Extra Services</h2>
      </div>

      <div className="cards-services">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-price">{service.price}</p>
              {service.showButton && (
                <>
                  <hr className="divider" />
                  <p className="order-button">
                    <em>Add to Order</em> <span className="arrow">→</span>
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
