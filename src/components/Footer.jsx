import '../styles/Footer.css';
import america_digital from '/assets/logo-pie-04.svg'; 
import america_studios from '/assets/logo-pie-02.svg';
import kapow from '/assets/logo-pie-03.svg';
import n_canal from '/assets/logo-pie-05.svg';
import america from '/assets/logo-pie-01.svg';

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
      <p className="footer-p"><strong className='semibold'>América</strong> © Todos los derechos reservados</p>
    </footer>
  );
}
