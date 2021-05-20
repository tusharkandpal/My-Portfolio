import "./Footer.css";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { ImHeart } from "react-icons/im";

function Footer() {
  return (
    <footer id="contact">
      <a href="mailto:kandpal.tushar@gmail.com" className="footer-info link">
        <SiMinutemailer size={20} /> Send me mail
      </a>
      <div className="footer-social">
        <a
          href="https://twitter.com/tushar_kandpal"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter size={20} />
        </a>

        <a
          href="https://github.com/tusharkandpal"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={20} />
        </a>

        <a
          href="https://linkedin.com/in/tushar-kandpal"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={20} />
        </a>
      </div>
      <p className="footer-copyright">
        © Tushar Kandpal, Made with <ImHeart />{" "}
      </p>
    </footer>
  );
}

export default Footer;
