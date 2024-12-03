import '../styles/Footer.css';
import america_digital from '../assets/america_digital.png'; 
import america_studios from '../assets/america_studios.png';
import kapow from '../assets/kapow.png';
import n_canal from '../assets/n_canal.png';
import america from '../assets/america.png';

export default function Footer() {
  return (
    <footer className="footer-content">
      <div className="footer-logos">
        <img src={america}alt="Logo América" />
        <img src={america_studios} alt="América Estudios" />
        <img src={kapow} alt="Kapow" />
        <img src={america_digital} alt="América Digital" />
        <img src={n_canal} alt="Canal N" />
      </div>
      <p className="footer-p"><strong>América</strong> © Todos los derechos reservados</p>
    </footer>
  );
}
