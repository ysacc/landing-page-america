import Header from './components/Header';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import { useRef } from 'react';

export default function App() {
  const downloadSectionRef = useRef(null);
  const scrollToDownloadSection = () => {
    if (downloadSectionRef.current) {
      downloadSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Header onScrollToDownload={scrollToDownloadSection} />
      <DownloadSection ref={downloadSectionRef} />
      <Footer />
    </>
  );
}

