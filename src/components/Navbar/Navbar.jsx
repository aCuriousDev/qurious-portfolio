import { FaBriefcase, FaHistory, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#projects">
        <FaBriefcase className="icon" />
        Projects
      </a>
      <a href="#timeline">
        <FaHistory className="icon" />
        Timeline
      </a>
      <a href="#contact">
        <FaEnvelope className="icon" />
        Contact
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
        LinkedIn
      </a>
    </nav>
  );
};

export default Navbar;
