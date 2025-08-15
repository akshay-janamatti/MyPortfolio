  import React from 'react';
  // import Logo from '../assets/Logo.png';
  import { FaLinkedin } from 'react-icons/fa';
  import { FaGithub } from 'react-icons/fa';
  
  // import * from '../assets/Anmol_resume.pdf';

  const Navbar = () => {
    return (
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <img className='mx-2 w-10'  />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-4xl'>
          <a href='https://github.com/akshay-janamatti' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/akshay-janamatti-8563bb218/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
          <a
          href=' '
          target='_blank'
          rel='noopener noreferrer'
          className='rounded border px-4 py-2 text-sm hover:bg-neutral-800'
        >
          View Resume
        </a>
        </div>
      </nav>
    );
  }

  export default Navbar;