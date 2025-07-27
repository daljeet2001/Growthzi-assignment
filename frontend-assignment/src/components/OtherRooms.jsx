
export const RoomVariants = () => {
  return (
    <div className="room-variants-wrapper">
      <div className="room-variants-header">
        <div className="room-variants-gold-line"></div>
        <h2 className="room-variants-title">Other Rooms</h2>
      </div>

      <div className="room-variants-grid">
        {[
          { title: "Deluxe Room", price: "$210/Night" },
          { title: "Double Room", price: "$180/Night" },
          { title: "Family Room", price: "$150/Night" },
        ].map((room, index) => (
          <div className="room-variant-card" key={index}>
            <div className="room-variant-overlay">
              <h3>{room.title}</h3>
              <p>{room.price}</p>
              <div className="room-variant-underline" />
              <span className="room-variant-link">See Details →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

