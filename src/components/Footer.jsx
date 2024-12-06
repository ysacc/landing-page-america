import '../styles/Footer.css';
import america_digital from '/assets/logo-pie-04.svg'; 
import america_studios from '/assets/logo-pie-02.svg';
import kapow from '/assets/logo-pie-03.svg';
import n_canal from '/assets/logo-pie-05.svg';
import america from '/assets/logo-pie-01.svg';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
    }),
  };
  return (
    <footer className="footer-content">
      <div className="footer-logos">
        <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={1}
              variants={containerVariants}
             >
              <img src={america}alt="Logo América" />
        </motion.div>
        <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={2}
              variants={containerVariants}
             >
               <img src={america_studios} alt="América Estudios" />
        </motion.div>
        <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={3}
              variants={containerVariants}
             >
              <img src={kapow} alt="Kapow" />
        </motion.div>
        <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={4}
              variants={containerVariants}
             >
              <img src={america_digital} alt="América Digital" />
        </motion.div>
        <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={5}
              variants={containerVariants}
             >
               <img src={n_canal} alt="Canal N" />
        </motion.div>
        
       
        
        
       
      </div>
      <p className="footer-p"><strong className='semibold'>América</strong> © Todos los derechos reservados</p>
    </footer>
  );
}
