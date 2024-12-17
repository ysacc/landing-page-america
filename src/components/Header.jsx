import React from 'react';
import '../styles/Header.css';
import { motion } from 'framer-motion';
import logo_america from '/assets/Precarga-America-v02.gif'; 
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
  const isTablet = useMediaQuery({ query: '(max-width: 1600px)' });
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
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
      {isMobile && (
  <motion.main
    className="main"
    initial="hidden"
    animate="visible"
    custom={1}
    variants={containerVariants}
  >
    <div style={{ marginLeft: "40px", marginTop: "80px" }}>
      <motion.h1 custom={2} variants={containerVariants}>
        {HEADER_TEXT.title}
      </motion.h1>
      <motion.p custom={3} variants={containerVariants}>
        {HEADER_TEXT.subtitle} <br />
        {HEADER_TEXT.subtitle1} <br />
        <strong className="p-strong">{HEADER_TEXT.subtitle2}</strong>{" "}
        {HEADER_TEXT.subtitle3}
        <br />
        <strong className="p-strong">{HEADER_TEXT.subtitle4}</strong>
      </motion.p>
    </div>
    <div className="logos">
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        custom={4}
        variants={containerVariants}
        className="logos0"
      >
        <motion.img
          src={america}
          alt={LOGOS_ALT_TEXT.america}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        custom={5}
        variants={containerVariants}
        className="logos1"
      >
        <div>
          <motion.img
            src={n_canal}
            alt={LOGOS_ALT_TEXT.nCanal}
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div>
          <motion.img
            src={america_studios}
            alt={LOGOS_ALT_TEXT.americaStudios}
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        custom={6}
        variants={containerVariants}
        className="logos2"
      >
        <div>
          <motion.img
            src={america_digital}
            alt={LOGOS_ALT_TEXT.americaDigital}
            whileHover={{ scale: 1.2, rotate: -15 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div>
          <motion.img
            src={kapow}
            alt={LOGOS_ALT_TEXT.kapow}
            whileHover={{ scale: 1.2, rotate: 20 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  </motion.main>
)}

        {!isMobile &&(
        <motion.main
        className="main"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={containerVariants}
      >
        {isTablet && (
        <div className='tablet-header'>
        <motion.h1 custom={2} variants={containerVariants}>{HEADER_TEXT.title} </motion.h1>
        <motion.p custom={3} variants={containerVariants}>
                {HEADER_TEXT.subtitle} {HEADER_TEXT.subtitle12}<br />{HEADER_TEXT.subtitle123}
                <strong className="p-strong">{HEADER_TEXT.subtitle2}</strong> {HEADER_TEXT.subtitle3}<strong className="p-strong">{HEADER_TEXT.subtitle4}</strong>
                </motion.p>
                </div>
            )}
       
        <div className="text-logos">

       {!isTablet && (
        <div>
          <motion.h1 custom={2} variants={containerVariants}>{HEADER_TEXT.title} </motion.h1>
          
        <motion.p custom={3} variants={containerVariants}>
          {HEADER_TEXT.subtitle} <br />{HEADER_TEXT.subtitle1} <br />
            <strong className="p-strong">{HEADER_TEXT.subtitle2}</strong> {HEADER_TEXT.subtitle3}<br /><strong className="p-strong">{HEADER_TEXT.subtitle4}</strong>
            </motion.p>
            </div>
      )}
        
          <div
          className="logos"
        >
            <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={4}
              variants={containerVariants}
             >
              <img src={america} alt={LOGOS_ALT_TEXT.america} />
            </motion.div>
            <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={5}
              variants={containerVariants}
             >
              <img src={america_studios} alt={LOGOS_ALT_TEXT.americaStudios} />
            </motion.div>
            <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={6}
              variants={containerVariants}
             >
              <img src={kapow} alt={LOGOS_ALT_TEXT.kapow} />
              </motion.div>
            <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={7}
              variants={containerVariants}
             >
              <img src={america_digital} alt={LOGOS_ALT_TEXT.americaDigital} />
              </motion.div>
              <motion.div 
             initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              custom={8}
              variants={containerVariants}
             >
              <img src={n_canal} alt={LOGOS_ALT_TEXT.nCanal} />
              </motion.div>
          </div>
        </div>
        </motion.main>
        )}
      <motion.div
        className="footer"
        initial="hidden"
        animate="visible"
        custom={9}
        variants={containerVariants}
      >
       <motion.button
          className="cta-button"
          onClick={onScrollToDownload}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >  {HEADER_TEXT.buttonText}
         </motion.button>
      <MdKeyboardDoubleArrowDown  style={{width:"35px",height:"35px",color:"#e8521d",}}/>
      </motion.div>
      
    </div>
  );
}
