import React from 'react';
import '../styles/Header.css';
import { motion } from 'framer-motion';
import logo_america from '/assets/logo-america.svg'; 
import america_digital from '/assets/logo-04.svg'; 
import america_studios from '/assets/logo-02.svg';
import kapow from '/assets/logo-03.svg';
import n_canal from '/assets/logo-05.svg';
import america from '/assets/logo-01.svg';
import { useMediaQuery } from 'react-responsive';
import { HEADER_TEXT, LOGOS_ALT_TEXT } from '../utils/constants';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Header({ onScrollToDownload }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
    }),
  };
    return (
    <div className="container">
      <motion.header
        className="header"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={containerVariants}
      >
        <img src={logo_america} alt="Logo América" className="logo" />
      </motion.header>
      {isMobile &&(
          <main className="main">
          <div style={{marginLeft:"40px"}} >
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
        <motion.main
        className="main"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={containerVariants}
      >
        <div>
        <motion.h1 custom={2} variants={containerVariants}>{HEADER_TEXT.title} </motion.h1>
        </div>
       
        <div className="text-logos">
        <motion.p custom={3} variants={containerVariants}>
          {HEADER_TEXT.subtitle} <br />{HEADER_TEXT.subtitle1} <br />
            <strong className="p-strong">{HEADER_TEXT.subtitle2}</strong> {HEADER_TEXT.subtitle3}<br /><strong className="p-strong">{HEADER_TEXT.subtitle4}</strong>
            </motion.p>
          <motion.div
          className="logos"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={containerVariants}
        >
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
          </motion.div>
        </div>
        </motion.main>
        )}


<motion.div
        className="footer"
        initial="hidden"
        animate="visible"
        custom={5}
        variants={containerVariants}
      >
       <motion.button
          className="cta-button"
          onClick={onScrollToDownload}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >  {HEADER_TEXT.buttonText}
         </motion.button>
      <MdKeyboardDoubleArrowDown  style={{width:"35px",height:"35px",color:"#ff6d27",}}/>
      </motion.div>
      
    </div>
  );
}
