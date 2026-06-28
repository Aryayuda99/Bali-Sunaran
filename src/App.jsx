import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { useState, useEffect } from "react";

import Loading from "./pages/Loading";
import Beranda from "./pages/Beranda";
import Layanan from "./pages/Layanan";
import AreaLayanan from "./pages/AreaLayanan";
import TentangKami from "./pages/TentangKami";
import HubungiKami from "./pages/HubungiKami";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 5000);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <Loading />;
}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/arealayanan" element={<AreaLayanan />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/hubungikami" element={<HubungiKami />} />
      </Routes>

      <WhatsAppFloat />
    </BrowserRouter>
  );
}


export default App;
