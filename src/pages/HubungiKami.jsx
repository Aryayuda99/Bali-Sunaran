import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import teknisi from "../assets/om kd su animasi 2.png";
import ornamen from "../assets/ornamen.png";

import "../css/HubungiKami.css";
import "../css/HubungiKamiResponsive.css";

function HubungiKami() {
  return (
    <>
      <Navbar />

      <section className="hubungi-kami">
        <div className="container">
          <div className="hubungi-grid">

            <div className="hubungi-kiri">
              <h1>Hubungi Kami</h1>

              <h2>Tim kami siap membantu anda.</h2>

              <p>
                Hubungi Bali Sunaran untuk layanan kuras limbah,
                sedot septic tank, dan pembersihan saluran mampet.
                Tim kami siap membantu kebutuhan Anda dengan respon
                cepat dan pelayanan yang rapi.
              </p>

              <p>
                Silakan hubungi melalui WhatsApp untuk informasi
                layanan, konsultasi, atau pemesanan. Tim kami siap
                melayani pelanggan di berbagai wilayah Bali.
              </p>

              <a
                href="https://wa.me/6281353217373"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp Kami
              </a>
            </div>

            <div className="hubungi-kanan">
              <img
                src={ornamen}
                alt=""
                className="ornamen"
              />

              <img
                src={teknisi}
                alt="Bali Sunaran"
                className="teknisi"
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HubungiKami;
