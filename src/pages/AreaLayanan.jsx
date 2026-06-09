import "../css/AreaLayanan.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AreaLayanan() {
  return (
    <>
      <Navbar />

      <section className="area-layanan">

        <h2>Area Layanan Kami</h2>
        <h1>Bali Sunaran</h1>

        <p className="area-deskripsi">
          Bali Sunaran melayani kuras limbah dan sedot WC di lebih dari
          30 area di Bali. Layanan tersedia untuk rumah, villa,
          restoran, hotel, dan tempat usaha. Area layanan mencakup:
        </p>

        <div className="area-grid">

          <div className="area-card">
            <h3>DENPASAR</h3>

            <ul>
              <li>Denpasar Barat</li>
              <li>Denpasar Timur</li>
              <li>Denpasar Utara</li>
              <li>Denpasar Selatan</li>
            </ul>
          </div>

          <div className="area-card">
            <h3>BADUNG</h3>

            <ul>
              <li>Kuta</li>
              <li>Kuta Utara</li>
              <li>Kuta Selatan</li>
              <li>Mengwi</li>
              <li>Abiansemal</li>
              <li>Petang</li>
            </ul>
          </div>

          <div className="area-card">
            <h3>KLUNGKUNG</h3>

            <ul>
              <li>Klungkung</li>
              <li>Banjarangkan</li>
              <li>Dawan</li>
            </ul>
          </div>

          <div className="area-card">
            <h3>TABANAN</h3>

            <ul>
              <li>Tabanan</li>
              <li>Kediri</li>
              <li>Kerambitan</li>
              <li>Selemadeg</li>
              <li>Baturiti</li>
              <li>Penebel</li>
              <li>Marga</li>
            </ul>
          </div>

          <div className="area-card">
            <h3>GIANYAR</h3>

            <ul>
              <li>Gianyar</li>
              <li>Blahbatuh</li>
              <li>Sukawati</li>
              <li>Tampaksiring</li>
              <li>Ubud</li>
              <li>Tegallalang</li>
              <li>Payangan</li>
            </ul>
          </div>

          <div className="area-card">
            <h3>KARANGASEM</h3>

            <ul>
              <li>Candidasa</li>
              <li>Padangbai</li>
            </ul>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default AreaLayanan;