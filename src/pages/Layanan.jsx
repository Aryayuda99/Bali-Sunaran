import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Layanan.css"
import "../css/LayananResponsive.css"

import { Link } from "react-router-dom";

import mentahan from "../assets/mentahan.png";
import kuras from "../assets/Kuras Septic Tank ChatGPT Image Jun 8, 2026, 03_27_56 PM.png";
import limbah from "../assets/Kuras Limbah ChatGPT Image Jun 8, 2026, 04_20_14 PM.png";
import saluran from "../assets/Atasi Saluran Mampet ChatGPT Image Jun 8, 2026, 04_20_20 PM.png";
import kloset from "../assets/Atasi Kloset Buntu ChatGPT Image Jun 8, 2026, 04_20_25 PM.png";
import wastafel from "../assets/Atasi Wastafel Tersumbat ChatGPT Image Jun 8, 2026, 04_20_30 PM.png";

function Layanan() {
  return (
    <>
    <Navbar />

      <section className="layanan">
        <h2>Layanan Kami</h2>
        <h1>Bali Sunaran</h1>
      </section>

    <section className="nama-layanan">
        <div className="layanan-gambar">
            <img className="mentahan" src={kuras} alt="gambar" />
        </div>

        <div className="teks">
            <h2>Kuras Septic Tank Penuh</h2>

            <p>
                Septic tank yang sudah penuh dapat menyebabkan toilet tidak
                berfungsi dengan baik, menimbulkan bau tidak sedap, bahkan
                bisa meluap ke permukaan.
            </p>

            <p>
                Tim kami akan menyedot isi septic tank dengan aman dan
                efisien. Setelah proses selesai, sistem pembuangan akan
                kembali normal sehingga toilet dapat digunakan dengan
                nyaman. Layanan ini sangat penting dilakukan secara berkala
                untuk menjaga kebersihan dan kesehatan lingkungan.
            </p>

            <div className="layanan-footer">
                <Link to="/hubungikami">
                <button className="tombol-pesan">
                    Pesan Sekarang
                </button>
                </Link>

            <div className="harga">
                <span>Harga mulai dari</span>
                <h3>499K</h3>
                <small>*harga dapat berubah tergantung kondisi</small>
            </div>
        </div>
    </div>

    </section>

    <section className="nama-layanan">
        <div className="layanan-gambar">
            <img className="mentahan" src={limbah} alt="gambar" />
        </div>

        <div className="teks">

            <h2>Kuras Limbah</h2>

            <p>
                Limbah yang menumpuk dapat menyebabkan bau tidak sedap dan 
                mengganggu lingkungan sekitar. Layanan kuras limbah dilakukan 
                untuk membersihkan dan menyedot limbah dari penampungan limbah 
                rumah, villa, restoran, hotel, kantor, dan berbagai tempat usaha lainnya. 
            </p>

            <p>
                Tim kami menyedot dan membersihkan limbah secara cepat dan rapi. 
                Proses ini membantu menjaga kebersihan lingkungan serta memastikan 
                sistem pembuangan tetap berjalan dengan baik. 
            </p>

            <div className="layanan-footer">
                <Link to="/hubungikami">
                <button className="tombol-pesan">
                    Pesan Sekarang
                </button>
                </Link>

            <div className="harga">
                <span>Harga mulai dari</span>
                <h3>699K</h3>
                <small>*harga dapat berubah tergantung kondisi</small>
            </div>
        </div>
    </div>

    </section>

    <section className="nama-layanan">
        <div className="layanan-gambar">
            <img className="mentahan" src={saluran} alt="gambar" />
        </div>

        <div className="teks">

            <h2>Atasi Saluran Mampet</h2>

            <p>
                Saluran air yang mampet dapat mengganggu aktivitas sehari hari 
                di rumah maupun tempat usaha. Air yang tidak mengalir dengan 
                lancar biasanya disebabkan oleh penumpukan kotoran, rambut, atau 
                sisa makanan di dalam pipa.
            </p>

            <p>
                Tim kami akan membersihkan penyumbatan pada pipa agar aliran air 
                kembali lancar. Layanan ini dapat digunakan untuk saluran kamar 
                mandi, dapur, pipa pembuangan, dan saluran air lainnya.
            </p>

            <div className="layanan-footer">
                <Link to="/hubungikami">
                <button className="tombol-pesan">
                    Pesan Sekarang
                </button>
                </Link>

            <div className="harga">
                <span>Harga mulai dari</span>
                <h3>249K</h3>
                <small>*harga dapat berubah tergantung kondisi</small>
            </div>
        </div>
    </div>

    </section>

    <section className="nama-layanan">
        <div className="layanan-gambar">
            <img className="mentahan" src={kloset} alt="gambar" />
        </div>

        <div className="teks">

            <h2>Atasi Kloset Buntu</h2>

            <p>
                Kloset buntu merupakan masalah yang sering terjadi pada toilet. 
                Kondisi ini biasanya disebabkan oleh penumpukan kotoran, 
                tisu berlebihan, atau benda asing yang masuk ke dalam pipa toilet. 
                Akibatnya air tidak dapat mengalir dengan baik dan toilet menjadi 
                tidak dapat digunakan. 
            </p>

            <p>
                Tim kami akan mengatasi penyumbatan sehingga toilet dapat kembali 
                digunakan dengan normal dan nyaman.
            </p>

            <div className="layanan-footer">
                <Link to="/hubungikami">
                <button className="tombol-pesan">
                    Pesan Sekarang
                </button>
                </Link>

            <div className="harga">
                <span>Harga mulai dari</span>
                <h3>249K</h3>
                <small>*harga dapat berubah tergantung kondisi</small>
            </div>
        </div>
    </div>

    </section>

    <section className="nama-layanan">
        <div className="layanan-gambar">
            <img className="mentahan" src={wastafel} alt="gambar" />
        </div>

        <div className="teks">

            <h2>Atasi Wastafel Tersumbat</h2>

            <p>
                Wastafel yang tersumbat biasanya disebabkan oleh sisa makanan, 
                minyak, lemak, atau kotoran yang menumpuk di dalam pipa. Jika 
                tidak segera ditangani, kondisi ini dapat menyebabkan air 
                menggenang dan menimbulkan bau tidak sedap.
            </p>

            <p>
                Tim kami akan mengatasi penyumbatan hingga aliran air kembali 
                lancar. Layanan ini cocok untuk wastafel dapur, wastafel kamar 
                mandi, maupun wastafel di tempat usaha.
            </p>

            <div className="layanan-footer">
                <Link to="/hubungikami">
                <button className="tombol-pesan">
                    Pesan Sekarang
                </button>
                </Link>

            <div className="harga">
                <span>Harga mulai dari</span>
                <h3>249K</h3>
                <small>*harga dapat berubah tergantung kondisi</small>
            </div>
        </div>
    </div>

    </section>

    <Footer />
    </>
    

  );
}

export default Layanan;
