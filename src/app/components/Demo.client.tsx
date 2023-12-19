'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Demo: React.FC = () => {
  const circleVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div 
        style={{ position: 'absolute' }}
        variants={circleVariants}
        initial="initial"
        whileHover="hover"
      >
        <div className="text-white text-4xl font-extrabold my-auto">Collapsify</div>
        <motion.div variants={iconVariants} style={{ position: 'absolute', top: '-50px', left: '50px' }}>
          <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
        </motion.div>
        <motion.div variants={iconVariants} style={{ position: 'absolute', top: '-50px', right: '50px' }}>
          <FontAwesomeIcon icon={faGoogle} size="2x" color="white" />
        </motion.div>
        <motion.div variants={iconVariants} style={{ position: 'absolute', bottom: '-50px', left: '50px' }}>
          <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
        </motion.div>
        <motion.div variants={iconVariants} style={{ position: 'absolute', bottom: '-50px', right: '50px' }}>
          <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Demo;
