import Navbar from "../components/Navbar";
import "../css/LandingPage.css";
import "../index.css";
import truck from "../assets/truck parallax.png";
import sky from "../assets/langit parallax 1.png";
import city from "../assets/Gedung, rumah, pohon parallax.png";
import road from "../assets/jalan new parallax.png";

function LandingPage() {
  return (
    <>
      <Navbar transparent />

      <section className="hero">
        <img className="sky" src={sky} alt="sky" />
        <img className="city" src={city} alt="city" />
        <img className="road" src={road} alt="road" />
        <img className="truck" src={truck} alt="truck" />

        <h1>BALI SUNARAN</h1>
      </section>

    </>
  );
}

export default LandingPage;
