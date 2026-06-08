import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-cta">
        <h2>
          Hubungi Kami Dan Dapatkan Penawaran
          <br />
          Spesial Khusus Untuk Anda
        </h2>

        <p>Hemat s/d 10% Dengan Menyebutkan Kode Promo!</p>
      </div>

      <div className="footer-main">
        <div className="footer-about">
          <img src={logo} alt="Logo Bali Sunaran" />

          <p>
            Bali Sunaran merupakan salah satu jasa kuras limbah yang berada
            di Kota Denpasar, Provinsi Bali. Layanan ini berdiri pada tahun
            2026 dan melayani seluruh wilayah Bali.
          </p>
        </div>

        <div className="footer-menu">
          <h3>Menu</h3>

          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>

            <li>
              <Link to="/layanan">Layanan</Link>
            </li>

            <li>
              <Link to="/arealayanan">Area Layanan</Link>
            </li>

            <li>
              <Link to="/tentangkami">Tentang Kami</Link>
            </li>
          </ul>
        </div>

        <div className="footer-kontak">
          <h3>Kontak</h3>

          <div className="kontak-item">
            <FaEnvelope className="kontak-icon" />

            <div>
              <h4>Email</h4>
              <p>balisunaran@yahoo.com</p>
            </div>
          </div>

          <div className="kontak-item">
            <FaPhoneAlt className="kontak-icon" />

            <div>
              <h4>Telepon</h4>
              <p>081353217373</p>
            </div>
          </div>

          <div className="kontak-item">
            <FaMapMarkerAlt className="kontak-icon" />

            <div>
              <h4>Alamat</h4>
              <p>
                Desa Padangsambian,
                <br />
                Denpasar Barat,
                <br />
                Kota Denpasar, Bali
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2026 Bali Sunaran. All Rights Reserved</p>
        <p>Dibuat dengan ❤️ oleh Arya Yuda</p>
      </div>
    </footer>
  );
}

export default Footer;