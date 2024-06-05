'use client'
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
// variants
import { fadeIn } from '../../variants';
// motion
import { motion } from 'framer-motion';

const WhatsappScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 25) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }



  return (
    <motion.div
        variants={fadeIn(0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}}
      className={`fixed bottom-4 md:bottom-4 right-4 rounded-xl z-50 transition-all duration-500 text-[3rem] md:text-[4rem]  
      
      ${
        scrolled
          ? 'block bg-green-500 hover:bg-green-400'
          : 'hidden'
      }`}
    >
      <a
        href="https://wa.link/fpullv"
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaWhatsapp className='text-white' />
    </a>
    </motion.div>
  );
};
export default WhatsappScroll;