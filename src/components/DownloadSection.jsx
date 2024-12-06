import { forwardRef } from 'react';
import '../styles/DownloadSection.css';
import { DOWNLOAD_SECTION_TEXT } from '../utils/constants';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const DownloadSection = forwardRef((props, ref) => {  
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <section ref={ref} className="download-section">
       {isMobile &&(
        <div className="download-main">
        <div className="download-header">
          <h2> {DOWNLOAD_SECTION_TEXT.header}<br /><strong className="text-strong">{DOWNLOAD_SECTION_TEXT.header2}</strong></h2>
          <p>{DOWNLOAD_SECTION_TEXT.description} <br /><strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description1}</strong> {DOWNLOAD_SECTION_TEXT.description2} <br />{DOWNLOAD_SECTION_TEXT.description3} <br />{DOWNLOAD_SECTION_TEXT.description4}<strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description5}</strong></p>
        </div>
        <div className="buttons">
            <button style={{width:"220px"}}>TARIFARIO AMERICA</button>
            <button style={{width:"240px"}}>TARIFARIO CANAL N</button>
            <button style={{width:"260px"}}>TARIFARIO DIGITAL</button>
            <button style={{width:"240px"}}>PROGRAMACION ACTUAL</button>
            <button style={{width:"260px"}}>PROGRAMACION SIGUIENTE</button>
          </div>
      </div>
       )}
       {!isMobile &&(
      <div className="download-main">
        <div className="download-header">
          <h2> {DOWNLOAD_SECTION_TEXT.header}<br /><strong className="text-strong">{DOWNLOAD_SECTION_TEXT.header2}</strong></h2>
        </div>
        <div className="text-buttons">
          <p>{DOWNLOAD_SECTION_TEXT.description} <br /><strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description1}</strong> {DOWNLOAD_SECTION_TEXT.description2} <br />{DOWNLOAD_SECTION_TEXT.description3} <br />{DOWNLOAD_SECTION_TEXT.description4}<strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description5}</strong></p>
          <div className="buttons">
            <button style={{width:"400px"}}>TARIFARIO AMERICA</button>
            <button style={{width:"450px"}}>TARIFARIO CANAL N</button>
            <button style={{width:"550px"}}>TARIFARIO DIGITAL</button>
            <div className="buttons-intro">
              <button style={{width:"300px"}}>PROGRAMACION ACTUAL</button>
              <button style={{width:"310px"}}>PROGRAMACION SIGUIENTE</button>
            </div>
          </div>
        </div>
      </div>
       )}
    </section>
  );
});

export default DownloadSection;