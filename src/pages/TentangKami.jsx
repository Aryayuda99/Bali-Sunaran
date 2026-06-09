import "../css/TentangKami.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import om from "../assets/om kd su.png";

function TentangKami() {
  return (
    <>
    <Navbar />
    
      <section className="tentang-kami">
        <div className="container">
      
        <h2>Tentang Kami</h2>
        <h1>Bali Sunaran</h1>
      
          <div className="tentang-content">
      
            <div className="tentang-foto">
              <img src={om} alt="Made Sutawan" />
      
              <h3>Made Sutawan</h3>
              <span>Founder Bali Sunaran</span>
            </div>
      
            <div className="tentang-teks">
              <p>
                Bali Sunaran adalah penyedia jasa kuras limbah dan sedot WC di Bali.
                Kami melayani rumah, villa, restoran, hotel, dan berbagai tempat usaha.
                Tim kami bekerja dengan peralatan yang memadai untuk memastikan proses
                kuras limbah berjalan cepat dan bersih.
              </p>
      
              <p>
                Kami memiliki pengalaman dalam menangani berbagai jenis limbah.
                Setiap pekerjaan dilakukan dengan cara yang aman dan rapi.
                Kepuasan pelanggan menjadi fokus utama dalam setiap layanan yang kami berikan.
              </p>
      
              <p>
                Bali Sunaran melayani berbagai wilayah di Bali.
                Tim kami siap membantu kebutuhan kuras septic tank,
                pembersihan saluran mampet, dan penanganan limbah lainnya.
              </p>
      
              <p>
                Kami berkomitmen memberikan layanan yang cepat,
                harga yang jelas, dan hasil kerja yang maksimal untuk setiap pelanggan.
              </p>
            </div>
      
          </div>
      
        </div>
      </section>





    <Footer />
    </>
  );
}

export default TentangKami;