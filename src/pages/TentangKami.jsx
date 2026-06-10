import "../css/TentangKami.css"
import "../css/TentangKamiResponsive.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import om from "../assets/om kd su new.png";

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
      
            <div className="tentang-teks2">
              <p>
                Bali Sunaran adalah penyedia jasa kuras limbah dan sedot WC yang melayani berbagai wilayah di Bali. 
                Kami membantu kebutuhan rumah, villa, hotel, restoran, kantor, dan berbagai tempat usaha dengan pelayanan 
                yang cepat, bersih, dan profesional.
              </p>
      
              <p>
                Didukung oleh tim yang berpengalaman serta peralatan yang memadai, kami siap menangani kuras septic tank, 
                kuras limbah, saluran mampet, kloset buntu, dan berbagai kebutuhan sanitasi lainnya. Setiap pekerjaan 
                dilakukan dengan mengutamakan kualitas, keamanan, dan kepuasan pelanggan.
              </p>

              <p>
                Dengan komitmen pada pelayanan yang responsif, harga yang jelas, dan hasil kerja yang maksimal, Bali Sunaran 
                terus berupaya menjadi mitra terpercaya bagi masyarakat dan pelaku usaha di seluruh Bali.
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
