import { Link } from "react-router-dom";
import StyledFooter from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="credit">
        <Link to="/" className="logo">
          Covid ID
        </Link>
        <p>
          Develop With <span>&hearts;</span> By Nelan
        </p>
      </div>
      <div className="actions">
        <Link to="/">Global</Link>
        <Link to="/indonesia">Indonesia</Link>
        <Link to="/provinsi">Provinsi</Link>
        <Link to="/about">About</Link>
      </div>
    </StyledFooter>
  );
};

export default Footer;
