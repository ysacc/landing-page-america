import { forwardRef } from 'react';
import '../styles/DownloadSection.css';
import { DOWNLOAD_SECTION_TEXT } from '../utils/constants';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const urlMap = {
  'tarifario-america': 'https://example.com/tarifario-america',
  'tarifario-canal-n': 'https://example.com/tarifario-canal-n',
  'tarifario-digital': 'https://example.com/tarifario-digital',
  'programacion-actual': 'https://example.com/programacion-actual',
  'programacion-siguiente': 'https://example.com/programacion-siguiente',
};

const handleRedirect = (key) => {
  if (urlMap[key]) {
    window.open(urlMap[key], '_blank'); 
  }
};

const DownloadSection = forwardRef((props, ref) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1600px)' });

  return (
    <section ref={ref} className="download-section">
      {isMobile && (
        <div className="download-main">
          <div className="download-header">
            <h2>
              {DOWNLOAD_SECTION_TEXT.header}
              <br />
              <strong className="text-strong">{DOWNLOAD_SECTION_TEXT.header2}</strong>
            </h2>
            <p>
              {DOWNLOAD_SECTION_TEXT.description} <br />
              <strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description1}</strong>{' '}
              {DOWNLOAD_SECTION_TEXT.description2} <br />
              {DOWNLOAD_SECTION_TEXT.description3} <br />
              {DOWNLOAD_SECTION_TEXT.description4}
              <strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description5}</strong>
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => handleRedirect('tarifario-america')} style={{ width: '180px' }}>
              TARIFARIO AMERICA
            </button>
            <button onClick={() => handleRedirect('tarifario-canal-n')} style={{ width: '220px' }}>
              TARIFARIO CANAL N
            </button>
            <button onClick={() => handleRedirect('tarifario-digital')} style={{ width: '260px' }}>
              TARIFARIO DIGITAL
            </button>
            <button onClick={() => handleRedirect('programacion-actual')} style={{ width: '220px' }}>
              PROGRAMACION ACTUAL
            </button>
            <button onClick={() => handleRedirect('programacion-siguiente')} style={{ width: '260px' }}>
              PROGRAMACION SIGUIENTE
            </button>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="download-main">
          {isTablet && (
            <>
              <div className="download-header">
                <h2>
                  {DOWNLOAD_SECTION_TEXT.header}
                  <br />
                  <strong className="text-strong">{DOWNLOAD_SECTION_TEXT.header21}</strong>
                  <br />
                  <strong className="text-strong">{DOWNLOAD_SECTION_TEXT.header22}</strong>
                </h2>
                <p>
                  {DOWNLOAD_SECTION_TEXT.description}{' '}
                  <strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description1}</strong> <br />
                  {DOWNLOAD_SECTION_TEXT.description21}
                  {DOWNLOAD_SECTION_TEXT.description22} {DOWNLOAD_SECTION_TEXT.description31}
                  <br />
                  {DOWNLOAD_SECTION_TEXT.description32} {DOWNLOAD_SECTION_TEXT.description4}
                  <strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description5}</strong>
                </p>
              </div>
              <div className="text-buttons">
                <div className="buttons">
                  <button
                    onClick={() => handleRedirect('tarifario-america')}
                    style={{ width: '260px', display: 'flex', justifyContent: 'start', alignItems: 'center', paddingLeft: '43px' }}
                  >
                    TARIFARIO AMERICA
                  </button>
                  <button
                    onClick={() => handleRedirect('tarifario-canal-n')}
                    style={{ width: '400px', display: 'flex', justifyContent: 'start', alignItems: 'center', paddingLeft: '43px' }}
                  >
                    TARIFARIO CANAL N
                  </button>
                  <button
                    onClick={() => handleRedirect('tarifario-digital')}
                    style={{ width: '520px', display: 'flex', justifyContent: 'start', alignItems: 'center', paddingLeft: '43px' }}
                  >
                    TARIFARIO DIGITAL
                  </button>
                  <div className="buttons-intro">
                    <button
                      onClick={() => handleRedirect('programacion-actual')}
                      style={{ width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      PROGRAMACION ACTUAL
                    </button>
                    <button
                      onClick={() => handleRedirect('programacion-siguiente')}
                      style={{ width: '310px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      PROGRAMACION SIGUIENTE
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {!isTablet && (
            <>
              <div className="download-header">
                <h2>
                  {DOWNLOAD_SECTION_TEXT.header}
                  <br />
                  <strong className="text-strong">{DOWNLOAD_SECTION_TEXT.header2}</strong>
                </h2>
              </div>
              <div className="text-buttons">
                <p>
                  {DOWNLOAD_SECTION_TEXT.description} <br />
                  <strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description1}</strong> {DOWNLOAD_SECTION_TEXT.description2}{' '}
                  <br />
                  {DOWNLOAD_SECTION_TEXT.description3} <br />
                  {DOWNLOAD_SECTION_TEXT.description4}
                  <strong className="text-strong1">{DOWNLOAD_SECTION_TEXT.description5}</strong>
                </p>
                <div className="buttons">
                  <button
                    onClick={() => handleRedirect('tarifario-america')}
                    style={{ width: '400px', display: 'flex', justifyContent: 'start', alignItems: 'center', paddingLeft: '43px' }}
                  >
                    TARIFARIO AMERICA
                  </button>
                  <button
                    onClick={() => handleRedirect('tarifario-canal-n')}
                    style={{ width: '450px', display: 'flex', justifyContent: 'start', alignItems: 'center', paddingLeft: '43px' }}
                  >
                    TARIFARIO CANAL N
                  </button>
                  <button
                    onClick={() => handleRedirect('tarifario-digital')}
                    style={{ width: '550px', display: 'flex', justifyContent: 'start', alignItems: 'center', paddingLeft: '43px' }}
                  >
                    TARIFARIO DIGITAL
                  </button>
                  <div className="buttons-intro">
                    <button
                      onClick={() => handleRedirect('programacion-actual')}
                      style={{ width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      PROGRAMACION ACTUAL
                    </button>
                    <button
                      onClick={() => handleRedirect('programacion-siguiente')}
                      style={{ width: '310px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      PROGRAMACION SIGUIENTE
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
});

export default DownloadSection;
