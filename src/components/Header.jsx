import React from 'react';
import '../styles/Header.css';
import logo_america from '../assets/logo_america.png'; 
import america_digital from '../assets/america_digital.png'; 
import america_studios from '../assets/america_studios.png';
import kapow from '../assets/kapow.png';
import n_canal from '../assets/n_canal.png';
import america from '../assets/america.png';

export default function Header({ onScrollToDownload }) {
    return (
    <div className="container">
      <header className="header">
        <img src={logo_america} alt="Logo América" className="logo" />
      </header>

      <main className="main">
        <div>
          <h1>Hola, cómo estás!</h1>
        </div>

        <div className="text-logos">
          <p>
            Pronto te estaremos <br />presentando un nuevo <br />
            <strong className="p-strong">ecosistema</strong> comercial <br /><strong className="p-strong">pensado en ti.</strong>
          </p>
          <div className="logos">
            <div>
              <img src={america} alt="América" />
            </div>
            <div>
              <img src={america_studios} alt="América Estudios" />
            </div>
            <div>
              <img src={kapow} alt="Kapow" />
            </div>
            <div>
              <img src={america_digital} alt="América Digital" />
            </div>
            <div>
              <img src={n_canal} alt="N" />
            </div>
          </div>
        </div>
      </main>

      {/* Botón para scrollear */}
      <div className="footer">
      <button className="cta-button" onClick={onScrollToDownload}>DESCÁRGATE LA PREVENTA 2025</button>
      </div>
    </div>
  );
}
