import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Beranda.css";
import "../css/BerandaResponsive.css";
import "../css/LandingPage.css";
import "../css/LandingPageResponsive.css";
import { NavLink, Link } from "react-router-dom";

import truck from "../assets/truck parallax.png";
import sky from "../assets/langit parallax 1.png";
import city from "../assets/Gedung, rumah, pohon parallax.png";
import road from "../assets/jalan new parallax.png";

import gambar1 from "../assets/Kuras Limbah ChatGPT Image Jun 8, 2026, 04_20_14 PM.png";
import gambar2 from "../assets/Kuras Septic Tank ChatGPT Image Jun 8, 2026, 03_27_56 PM.png";
import gambar3 from "../assets/Atasi Saluran Mampet ChatGPT Image Jun 8, 2026, 04_20_20 PM.png";
import gambar4 from "../assets/Atasi Kloset Buntu ChatGPT Image Jun 8, 2026, 04_20_25 PM.png";
import gambar5 from "../assets/Atasi Wastafel Tersumbat ChatGPT Image Jun 8, 2026, 04_20_30 PM.png";

import foto1 from "../assets/testimoni1.jpeg";
import foto2 from "../assets/testimoni2.jpeg";
import foto3 from "../assets/testimoni3.jpeg";
import foto4 from "../assets/testimoni4.jpeg";
import foto5 from "../assets/testimoni5.jpeg";

import om from "../assets/om kd su new.png";

function Beranda() {
  return (
    <>
      <Navbar transparent />

      <section className="hero">
        <img className="sky" src={sky} alt="Langit" />
        <img className="city" src={city} alt="Kota" />
        <img className="road" src={road} alt="Jalan" />
        <img className="truck" src={truck} alt="Truk Bali Sunaran" />

        <h1>BALI SUNARAN</h1>
      </section>

{/* =========================
   Stats informasi
========================= */}

      <section className="stats">
        <div className="container">
          <div className="kartu-informasi">
            <h2>999+</h2>
            <p>Pelanggan Dilayani</p>
          </div>

          <div className="kartu-informasi">
            <h2>10+</h2>
            <p>Tahun Pengalaman</p>
          </div>

          <div className="kartu-informasi">
            <h2>30+</h2>
            <p>Area Layanan di Bali</p>
          </div>

          <div className="kartu-informasi">
            <h2>24</h2>
            <p>Jam Layanan</p>
          </div>
        </div>
      </section>

{/* ===============================================================================
                              Mengapa Harus Bali Sunaran
================================================================================== */}

      <section className="why-us">
        <div className="container">
          <h1>Mengapa Harus Bali Sunaran?</h1>

          <p>
            Kami berkomitmen memberikan pelayanan terbaik dengan kerja cepat,
            hasil bersih, dan harga jelas.
          </p>

          <p>
            Tim kami siap membantu kebutuhan kuras limbah Anda di seluruh Bali.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <div className="icon">⭐</div>

              <h3>Berpengalaman</h3>

              <p>
                Tim kami telah berpengalaman menangani berbagai jenis pekerjaan
                kuras limbah secara aman dan profesional.
              </p>
            </div>

            <div className="why-card">
              <div className="icon">🔧</div>

              <h3>Peralatan Memadai</h3>

              <p>
                Menggunakan armada dan peralatan modern sehingga proses
                pekerjaan menjadi lebih cepat dan bersih.
              </p>
            </div>

            <div className="why-card">
              <div className="icon">⚡</div>

              <h3>Respon Cepat</h3>

              <p>
                Tim siap merespon panggilan dengan cepat dan datang ke lokasi
                sesuai kebutuhan pelanggan.
              </p>
            </div>

            <div className="why-card">
              <div className="icon">💰</div>

              <h3>Harga Jelas</h3>

              <p>
                Harga diinformasikan sebelum pekerjaan dimulai sehingga tidak
                ada biaya tersembunyi.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* ===============================================================================
                              Layanan Kami
================================================================================== */}

      <section className="layanan">
        <div className="container">
          <h1>Layanan Kami</h1>

          <div className="layanan-grid">
            <Link to="/layanan" className="layanan-link">
            <div className="layanan-card">
              <img src={gambar1} alt="Kuras Limbah" />
              <h3>Kuras Limbah</h3>
            </div>
            </Link>

            <div className="layanan-card">
              <Link to="/layanan" className="layanan-link">
              <img src={gambar2} alt="Kuras Septic Tank" />
              <h3>Kuras Septic Tank</h3>
              </Link>
            </div>

            <div className="layanan-card">
              <Link to="/layanan" className="layanan-link">
              <img src={gambar3} alt="Saluran Mampet" />
              <h3>Mengatasi Saluran Mampet</h3>
              </Link>
            </div>

            <div className="layanan-card">
              <Link to="/layanan" className="layanan-link">
              <img src={gambar4} alt="WC Buntu" />
              <h3>Mengatasi Closet / WC Buntu</h3>
              </Link>
            </div>

            <div className="layanan-card">
              <Link to="/layanan" className="layanan-link">
              <img src={gambar5} alt="Grease Trap" />
              <h3>Mengatasi Wastafel Tersumbat</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* ===============================================================================
                              Testimoni
================================================================================== */}

      <section className="testimoni">
  <div className="container">

    <h1>Testimoni Pelanggan</h1>

    <div className="testimoni-grid">

      <div className="testimoni-card">
        <img src={foto1} alt="Komang" />

        <h3>Komang's</h3>
        <span>Denpasar Barat</span>

        <p>
          "Awalnya WC di rumah buntu dan cukup mengganggu.
          Setelah menghubungi layanan ini, teknisinya datang
          cepat dan masalah langsung teratasi."
        </p>

        <div className="quote">❝</div>
      </div>

      <div className="testimoni-card">
        <img src={foto2} alt="pramudya" />

        <h3>Pramudya</h3>
        <span>Klungkung</span>

        <p>
          "Sudah beberapa kali menggunakan jasa kuras septic
          tank di sini. Pelayanannya selalu profesional dan
          hasilnya memuaskan."
        </p>

        <div className="quote">❝</div>
      </div>

      <div className="testimoni-card">
        <img src={foto3} alt="Putu Emud" />

        <h3>Hason</h3>
        <span>Denpasar Timur</span>

        <p>
          "Layanannya cepat dan hasilnya memuaskan."
        </p>

        <div className="quote">❝</div>
      </div>

      <div className="testimoni-card">
        <img src={foto4} alt="Hason" />

        <h3>Tujack</h3>
        <span>Dalung</span>

        <p>
          "Responnya dan pelayanannya cepat, septic tank saya penuh. saya call malem hari, malem itu juga dateng. mantep pokoknya."
        </p>

        <div className="quote">❝</div>
      </div>

    </div>

    <div className="slider-dot">
      <span></span>
      <span className="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>
</section>

{/* ===============================================================================
                              Tentang Kami
================================================================================== */}

<section className="tentang-kami">
  <div className="container">

    <h1>Tentang Kami</h1>

    <div className="tentang-content">

      <div className="tentang-foto">
        <img src={om} alt="Made Sutawan" />

        <h3>Made Sutawan</h3>
        <span>Founder Bali Sunaran</span>
      </div>

      <div className="tentang-teks">
        <p>
          Bali Sunaran adalah penyedia jasa kuras limbah dan sedot WC yang 
          melayani berbagai wilayah di Bali. Kami membantu kebutuhan rumah, 
          villa, hotel, restoran, kantor, dan berbagai jenis usaha dengan 
          pelayanan yang cepat, bersih, dan profesional.
        </p>

        <p>
          Didukung oleh tim berpengalaman serta peralatan yang memadai, 
          kami siap menangani kuras septic tank, kuras limbah, saluran mampet, 
          dan berbagai kebutuhan sanitasi lainnya. Kepuasan pelanggan menjadi 
          prioritas utama dalam setiap pekerjaan yang kami lakukan.
        </p>

      </div>

    </div>

  </div>
</section>

      <Footer />
    </>
  );
}

export default Beranda;
