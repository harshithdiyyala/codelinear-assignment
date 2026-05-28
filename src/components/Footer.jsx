import { FiArrowRight } from 'react-icons/fi';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import CtaPanel from './CtaPanel.jsx';
import { footerLinks } from '../data/content.js';
import useReveal from '../hooks/useReveal.js';
import './Footer.css';

function Footer() {
  const footerRef = useReveal();

  return (
    <footer className="footer reveal-section" id="contact" ref={footerRef}>
      <CtaPanel />
      <div className="footer-top">
        <strong className="footer-logo">N7</strong>
        <address>
          <b>London</b>
          Linktia Infosystems Ltd - CB7, 26 Main Road Sundridge, England, United Kingdom.
        </address>
        <address>
          <b>Dubai</b>
          Linktia Infosystems Ltd - CB7, Jumeirah Business, Cluster W, United Arab Emirates
        </address>
        <address>
          <b>London</b>
          Linktia Infosystems CB7, Nirmal, Pune, Maharashtra.
        </address>
      </div>
      <div className="footer-links">
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4>{group}</h4>
            {links.map((link) => <a href="#top" key={link}>{link} <FiArrowRight aria-hidden="true" /></a>)}
          </div>
        ))}
        <div>
          <h4>Our Socials</h4>
          <a href="#top">LinkedIn <FaLinkedinIn aria-hidden="true" /></a>
          <a href="#top">X <FaXTwitter aria-hidden="true" /></a>
        </div>
      </div>
      <p className="copyright">Copyright © 2022 by Linktia Infosystems Limited — CB7 and N7 as Commercial Brand.</p>
    </footer>
  );
}

export default Footer;
