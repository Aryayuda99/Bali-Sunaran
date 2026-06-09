import "./Navbar.css";
import logo from "../assets/bali_sunaran_logo_transparent.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
  <img className="logo" src={logo} alt="logo" />

<ul className="nav-links">
  <li>
    <Link to="/beranda">Beranda</Link>
  </li>
  <li>
    <Link to="/layanan">Layanan</Link>
  </li>
  <li>
    <Link to="/AreaLayanan">Area Layanan</Link>
    </li>
  <li>
    <Link to="/TentangKami">Tentang Kami</Link>
    </li>
</ul>

  <button>Hubungi Kami</button>
</nav>
  );
}

export default Navbar;