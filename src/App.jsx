import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route path="/area-layanan" element={<AreaLayanan />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/tentang-kami" element={<HubungiKami />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;