import { forwardRef } from 'react';
import '../styles/DownloadSection.css';

const DownloadSection = forwardRef((props, ref) => {  
  return (
    <section ref={ref} className="download-section">
      <div className="download-main">
        <div className="download-header">
          <h2>Descárgate la <br /><strong className="text-strong">Preventa 2025!</strong></h2>
        </div>
        <div className="text-buttons">
          <p>Desde aquí puedes <br /><strong className="text-strong">descargar</strong> los archivos <br />que necesitas para <br />tu <strong className="text-strong">planificación.</strong></p>
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
    </section>
  );
});

export default DownloadSection;