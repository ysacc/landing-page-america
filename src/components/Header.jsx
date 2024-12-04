import React from 'react';
import '../styles/Header.css';
import logo_america from '../assets/logo-america.svg'; 
import america_digital from '../assets/logo-04.svg'; 
import america_studios from '../assets/logo-02.svg';
import kapow from '../assets/logo-03.svg';
import n_canal from '../assets/logo-05.svg';
import america from '../assets/logo-01.svg';
import { useMediaQuery } from 'react-responsive';
import { HEADER_TEXT, LOGOS_ALT_TEXT } from '../utils/constants';

export default function Header({ onScrollToDownload }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
    <div className="container">
      <header className="header">
        <img src={logo_america} alt="Logo América" className="logo" />
      </header>
      {isMobile &&(
          <main className="main">
          <div style={{marginLeft:"40px"}}>
          <h1>{HEADER_TEXT.title}</h1>
          <p>
            {HEADER_TEXT.subtitle} <br />{HEADER_TEXT.subtitle1} <br />
              <strong className="p-strong">{HEADER_TEXT.subtitle2}</strong> {HEADER_TEXT.subtitle3}<br /><strong className="p-strong">{HEADER_TEXT.subtitle4}</strong>
            </p>
          </div>
         <div className="logos">
             <div style={{margin:"auto",marginBottom:"-30px"}}>
               <img src={america} alt={LOGOS_ALT_TEXT.america} />
             </div>
             <div className="logos1">
             <div>
                 <img src={n_canal} alt={LOGOS_ALT_TEXT.nCanal} />
               </div>
               <div>
                 <img src={america_studios} alt={LOGOS_ALT_TEXT.americaStudios} />
               </div>

             </div>
             <div className="logos2">
               <div>
                 <img src={america_digital} alt={LOGOS_ALT_TEXT.americaDigital} />
               </div>
               
               <div>
                 <img src={kapow} alt={LOGOS_ALT_TEXT.kapow} />
               </div>
             </div>
           </div>
       </main>
        )}
        {!isMobile &&(
      <main className="main">
        <div>
        <h1>{HEADER_TEXT.title}</h1>
        </div>
       
        <div className="text-logos">
          <p>
          {HEADER_TEXT.subtitle} <br />{HEADER_TEXT.subtitle1} <br />
            <strong className="p-strong">{HEADER_TEXT.subtitle2}</strong> {HEADER_TEXT.subtitle3}<br /><strong className="p-strong">{HEADER_TEXT.subtitle4}</strong>
          </p>
          <div className="logos">
            <div>
              <img src={america} alt={LOGOS_ALT_TEXT.america} />
            </div>
            <div>
              <img src={america_studios} alt={LOGOS_ALT_TEXT.americaStudios} />
            </div>
            <div>
              <img src={kapow} alt={LOGOS_ALT_TEXT.kapow} />
            </div>
            <div>
              <img src={america_digital} alt={LOGOS_ALT_TEXT.americaDigital} />
            </div>
            <div>
              <img src={n_canal} alt={LOGOS_ALT_TEXT.nCanal} />
            </div>
          </div>
        </div>
      </main>
        )}


      {/* Botón para scrollear */}
      <div className="footer">
      <button className="cta-button" onClick={onScrollToDownload}>  {HEADER_TEXT.buttonText}</button>
      </div>
    </div>
  );
}
