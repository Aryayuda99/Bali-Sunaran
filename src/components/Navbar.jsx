import "./Navbar.css";
import "../css/NavbarResponsive.css";
import logo from "../assets/bali_sunaran_logo_transparent.png";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({ transparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  const transparentClass = transparent && !scrolled ? "navbar transparent" : "navbar";

  return (
    <nav className={`${transparentClass}${menuOpen ? " menu-open" : ""}`}>
      <img className="logo" src={logo} alt="logo" />

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        <li>
          <NavLink to="/beranda" onClick={closeMenu}>Beranda</NavLink>
        </li>

        <li>
          <NavLink to="/layanan" onClick={closeMenu}>Layanan</NavLink>
        </li>

        <li>
          <NavLink to="/arealayanan" onClick={closeMenu}>Area Layanan</NavLink>
        </li>

        <li>
          <NavLink to="/tentangkami" onClick={closeMenu}>Tentang Kami</NavLink>
        </li>

        <li className="mobile-contact">
          <NavLink to="/hubungikami" onClick={closeMenu}>Hubungi Kami</NavLink>
        </li>
      </ul>

      <Link to="/hubungikami">
        <button>Hubungi Kami</button>
      </Link>
    </nav>
  );
}

export default Navbar;
