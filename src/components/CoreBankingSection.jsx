import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Button from './Button.jsx';
import { coreFeatures } from '../data/content.js';
import useReveal from '../hooks/useReveal.js';
import './CoreBankingSection.css';

function CoreBankingSection() {
  const coreRef = useReveal();
  const checklistRef = useReveal();

  return (
    <>
      <section className="section split dark-feature reveal-section" ref={coreRef}>
        <div className="feature-copy">
          <span className="watermark">CB7</span>
          <h2>A complete cloud-based core banking.</h2>
          <p>Faster time to market with our cloud-based core banking services</p>
          <Button>Request Demo</Button>
          <a className="text-link" href="#solutions">Learn More <FiArrowRight aria-hidden="true" /></a>
        </div>
        <div className="dashboard-wrap">
          <img src="/assets/aml-dashboard.png" alt="AML dashboard interface" loading="lazy" />
        </div>
      </section>

      <section className="section split checklist-section reveal-section" ref={checklistRef}>
        <div className="dashboard-wrap offset-left">
          <img src="/assets/aml-dashboard.png" alt="Core banking analytics dashboard" loading="lazy" />
        </div>
        <div>
          <h2>Run a more efficient, flexible,and digitally connected corebanking system</h2>
          <h4>What you will get:</h4>
          <ul className="check-grid">
            {coreFeatures.map((feature) => (
              <li key={feature}><FiCheck aria-hidden="true" />{feature}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default CoreBankingSection;
