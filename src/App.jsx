import Header from './components/Header';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import { useEffect, useRef, useState } from 'react';
import loadingGif from '/assets/Precarga-America-v02.gif'
import './App.css';

export default function App() {
  const downloadSectionRef = useRef(null);
  const [loading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Terminar la carga después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);

  const scrollToDownloadSection = () => {
  if (downloadSectionRef.current) {
    downloadSectionRef.current.classList.add('visible');
    downloadSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};

  

  return (
    <>
      {loading && (
        <div className="loading-screen">
          <img src={loadingGif} alt="Cargando..." />
        </div>
      )}
      {!loading && (
        <>
          <Header onScrollToDownload={scrollToDownloadSection} />
          <DownloadSection ref={downloadSectionRef} />
          <Footer />
        </>
      )}
    </>
  );
}

