import "../css/Loading.css";

import truk from "../assets/loading om kd su.png";

function Loading() {
  return (
    <section className="loading">
      <div className="loading-track">
        <img
            src={truk}
            alt="Loading"
            className="loading-truck"
        />
    </div>

      <h2>
        Menuju Lokasi Anda
        <span className="dots"></span>
      </h2>

      <p>Mohon tunggu sebentar.</p>

      <div className="progress">
        <div className="progress-fill"></div>
</div>
    </section>
  );
}

export default Loading;