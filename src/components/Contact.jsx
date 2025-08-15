import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`;

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}} 
        className='my-10 text-center text-4xl'>
        Get in Touch
      </motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.a 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}} 
          href={gmailLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='border-b hover:text-purple-500 transition-colors duration-300'
        >
          {CONTACT.email}
        </motion.a>
      </div>
      <div className='mt-10 flex items-center justify-center gap-4 text-sm'>   
         <a href="https://www.freecounterstat.com" title="free stat counter" target="_blank" rel="noopener noreferrer">
        <img
          src="https://counter1.optistats.ovh/private/freecounterstat.php?c=lp8zgje2ps824r98a2f66abrnmqsl9cj"
          border="0"
          title="free stat counter"
          alt="free stat counter"
        />
        <span> Site visits</span>
      </a>
      </div>
    </div>
  )
}

export default Contact;