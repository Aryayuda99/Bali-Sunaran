import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Beranda.css";
import mentahan from "../assets/mentahan.png";

function Beranda() {
  return (
    <>
      <Navbar />

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

    <section className= "judul">
        <h1>Mengapa Harus Bali Sunaran?</h1>
        <p>Kami berkomitmen memberikan pelayanan terbaik dengan kerja cepat, hasil bersih, dan harga jelas.</p>
        <p>Tim kami siap membantu kebutuhan kuras limbah Anda di seluruh Bali.</p>
        </section>

      <section className="judul">
        <h1>Layanan Kami</h1>
      </section>

      <section className="judul">
        <h1>Testimoni Pelanggan</h1>
      </section>

      <section className="judul">
        <h1>Tentang Kami</h1>
      </section>

      <Footer />
    </>
  );
}

export default Beranda;