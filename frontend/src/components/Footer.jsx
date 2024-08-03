import React from 'react'
import styles from '../styles/Footer.module.css';

const Footer = () =>
{
  const currentYear = new Date().getFullYear();
  return (
      <footer className= { styles.footer }>
          <div className = { styles.footerContent }>
        &copy; {currentYear} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;