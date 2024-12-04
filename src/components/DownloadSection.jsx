import { forwardRef } from 'react';
import '../styles/DownloadSection.css';
import { DOWNLOAD_SECTION_TEXT } from '../utils/constants';
import { useMediaQuery } from 'react-responsive';


const DownloadSection = forwardRef((props, ref) => {  
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <section ref={ref} className="download-section">
       {isMobile &&(
        <div className="download-main">
        <div className="download-header">
          <h2> {DOWNLOAD_SECTION_TEXT.header}<br /><strong className="text-strong">{DOWNLOAD_SECTION_TEXT.header2}</strong></h2>
          <p>{DOWNLOAD_SECTION_TEXT.description} <br /><strong className="text-strong">{DOWNLOAD_SECTION_TEXT.description1}</strong> {DOWNLOAD_SECTION_TEXT.description2} <br />{DOWNLOAD_SECTION_TEXT.description3} <br />{DOWNLOAD_SECTION_TEXT.description4}<strong className="text-strong">{DOWNLOAD_SECTION_TEXT.description5}</strong></p>
        </div>
        <div className="buttons">
            <button >TARIFARIO AMERICA</button>
            <button >TARIFARIO CANAL N</button>
            <button >TARIFARIO DIGITAL</button>
            <button >PROGRAMACION ACTUAL</button>
            <button>PROGRAMACION SIGUIENTE</button>
          </div>
      </div>
       )}
       {!isMobile &&(
      <div className="download-main">
        <div className="download-header">
          <h2> {DOWNLOAD_SECTION_TEXT.header}<br /><strong className="text-strong">{DOWNLOAD_SECTION_TEXT.header2}</strong></h2>
        </div>
        <div className="text-buttons">
          <p>{DOWNLOAD_SECTION_TEXT.description} <br /><strong className="text-strong">{DOWNLOAD_SECTION_TEXT.description1}</strong> {DOWNLOAD_SECTION_TEXT.description2} <br />{DOWNLOAD_SECTION_TEXT.description3} <br />{DOWNLOAD_SECTION_TEXT.description4}<strong className="text-strong">{DOWNLOAD_SECTION_TEXT.description5}</strong></p>
          <div className="buttons">
            <button style={{width:"330px"}}>TARIFARIO AMERICA</button>
            <button style={{width:"380px"}}>TARIFARIO CANAL N</button>
            <button style={{width:"420px"}}>TARIFARIO DIGITAL</button>
            <div className="buttons-intro">
              <button >PROGRAMACION ACTUAL</button>
              <button>PROGRAMACION SIGUIENTE</button>
            </div>
          </div>
        </div>
      </div>
       )}
    </section>
  );
});

export default DownloadSection;