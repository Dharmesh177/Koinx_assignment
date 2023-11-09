import { ReactComponent as Coinxx } from "../../assets/brand-logo.svg";

import "./navbar.styles.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
       <Coinxx/>
      <div className="nav-links-container">
        <div className="nav-links">
          <span>Features</span>
          <span>Exchanges</span>
          <span>How it Works?</span>
          <span>Blog</span>
          <span>About Us</span>
        </div>
        <div className="sign-in">
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
