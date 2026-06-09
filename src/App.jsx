import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppFloat from "./components/WhatsAppFloat";

import LandingPage from "./pages/LandingPage";
import Beranda from "./pages/Beranda";
import Layanan from "./pages/Layanan";
import AreaLayanan from "./pages/AreaLayanan";
import TentangKami from "./pages/TentangKami";
import HubungiKami from "./pages/HubungiKami";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
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