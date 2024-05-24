import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-page">
        <div className="footer-item">
          <div className="footer-list">
            <h3>Product</h3>
            <ul className="footer-list-item">
              <li>Employee database</li>
              <li>Payroll</li>
              <li>Absence</li>
              <li>Time Tracking</li>
              <li>Shift planner</li>
              <li>Recruiting</li>
            </ul>
          </div>
          <div className="footer-list">
            <h3>Information</h3>
            <ul className="footer-list-item">
              <li>FAQ</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-list">
            <h3>Company</h3>
            <ul className="footer-list-item">
              <li>Solution</li>
              <li>Industries</li>
              <li>Partners</li>
              <li>About</li>
              <li>Resources</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer-end">
          <h3>Subscribe</h3>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Email address"
            className="footer-input"
          />
          <p>
            Hello, we are Lift Media. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
        </div>
      </footer>

      <div className="end">
        <img
          className="end-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFm8yvD6tZA_3Vi2KejZxfGp_Wllnhf2VD5w&s"
          alt=""
        />

        <ul className="end-list">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>

        <ul className="end-list">
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
