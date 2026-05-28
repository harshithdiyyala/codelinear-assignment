import Button from './Button.jsx';
import HeroVisual from './HeroVisual.jsx';
import { partners } from '../data/content.js';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>The new foundation of modern banking</h1>
        <p>We drive innovation and growth, provide seamless customer experience and operational excellence</p>
        <div className="hero-actions">
          <Button>Request Demo</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
        <div className="trusted">
          <span>Trusted By:</span>
          <div>
            {partners.map((partner) => (
              <img src={partner.logo} alt={partner.name} key={partner.name} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}

export default HeroSection;
