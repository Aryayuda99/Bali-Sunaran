import "./WhatsAppFloat.css";
import { Link } from "react-router-dom";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6281934362988"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
        alt="WhatsApp"
      />
    </a>
  );
}

export default WhatsAppFloat;