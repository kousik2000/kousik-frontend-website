import "./index.css";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = (props) => {
  const { isPortfolioClicked, isContactClicked } = props;

  const scrollToPortfolio = () => {
    isPortfolioClicked();
  };

  const scrollToContact = () => {
    isContactClicked();
  };

  const handleCheckboxChange = (e) => {
    const navbarList = document.querySelector(".navbar-list");
    if (e.target.checked) {
      navbarList.classList.add("checked");
    } else {
      navbarList.classList.remove("checked");
    }
  };

  const hideNavbarList = () => {
    const navbarList = document.querySelector(".navbar-list");
    navbarList.classList.remove("checked");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <h1 className="logo">
          <span className="logo-span">R</span>VK
        </h1>
      </Link>
      <ul className="navbar-list">
        <Link to="/" className="nav-link">
          <li onClick={hideNavbarList}>Home</li>
        </Link>
        <li
          onClick={() => {
            scrollToPortfolio();
            hideNavbarList();
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            scrollToContact();
            hideNavbarList();
          }}
        >
          Contact
        </li>
        <Link to="/account" className="nav-link">
          <li onClick={hideNavbarList}>Account</li>
        </Link>
      </ul>
      <input type="checkbox" id="check" onChange={handleCheckboxChange} />
      <label htmlFor="check" className="checkbtn">
        <GiHamburgerMenu />
      </label>
    </nav>
  );
};

export default Header;
