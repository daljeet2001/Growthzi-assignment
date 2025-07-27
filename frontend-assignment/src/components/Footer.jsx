import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDribbble,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
     
        <div className="footer-left">
          <span className="logo-text">
            IMPERIAL <small>GRAND HOTEL</small>
          </span>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="footer-links">
          <h3 className="footer-title">USEFUL LINKS</h3>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>ROOM</li>
          </ul>
        </div>

        <div className="footer-subscribe">
          <h3 className="footer-title">SUBSCRIBE</h3>
          <p className="footer-subtext">
            Don’t miss to subscribe our news,<br />
            kindly fill the form bellow
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your Email Here" />
            <button>&gt;</button>
          </div>
        </div>
      </div>

      <div className="footer-icons">
        {[FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaDribbble].map((Icon, i) => (
          <div className="icon-circle" key={i}>
            <Icon size={16} />
          </div>
        ))}
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <span>© 2025 Imperial Grand Hotel. All Rights Reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

