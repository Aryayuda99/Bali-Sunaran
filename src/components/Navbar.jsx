import "./Navbar.css";
import logo from "../assets/bali_sunaran_logo_transparent.png";
import { NavLink, Link } from "react-router-dom";

function Navbar({ transparent = false }) {
  return (
    <nav className={transparent ? "navbar transparent" : "navbar"}>
      <img className="logo" src={logo} alt="logo" />

      <ul className="nav-links">
        <li>
          <NavLink to="/beranda">Beranda</NavLink>
        </li>

        <li>
          <NavLink to="/layanan">Layanan</NavLink>
        </li>

        <li>
          <NavLink to="/arealayanan">Area Layanan</NavLink>
        </li>

        <li>
          <NavLink to="/tentangkami">Tentang Kami</NavLink>
        </li>
      </ul>

      <Link to="/hubungikami">
        <button>Hubungi Kami</button>
      </Link>
    </nav>
  );
}

export default Navbar;