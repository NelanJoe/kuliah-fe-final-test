import { Link } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <nav>
        <Link to="/">Covid ID</Link>
        <div>
          <Link to="/">Global</Link>
          <Link to="/indonesia">Indonesia</Link>
          <Link to="/provinsi">Provinsi</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
