import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Button from './Button.jsx';
import CtaPanel from './CtaPanel.jsx';
import PhoneMockup from './PhoneMockup.jsx';
import { digitalBenefits } from '../data/content.js';
import useReveal from '../hooks/useReveal.js';
import './DigitalBankingSection.css';

function DigitalBankingSection() {
  const sectionRef = useReveal();

  return (
    <section className="digital-section reveal-section" ref={sectionRef}>
      <div className="ticker" aria-label="Say hello to the new way of banking">
        <div className="ticker-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span className="ticker-item" key={index} aria-hidden={index > 0}>
              <strong>N7</strong> ✳ Say <span className="wave-hand">👋</span> to the new way of banking ✳ <strong>CB7</strong> ✳
            </span>
          ))}
        </div>
      </div>
      <div className="section digital-feature digital-feature-intro">
        <div className="digital-copy">
          <h2>Digital banking out-of-the-box</h2>
          <p>N7 helps your financial institution improve the client experience, automate and optimize procedures</p>
          <Button>Request Demo</Button>
          <a className="text-link dark" href="#contact">Learn More <FiArrowRight aria-hidden="true" /></a>
        </div>
        <PhoneMockup image={digitalBenefits[0].image} label="N7 mobile banking app home screen" />
        <article className="benefit-card">
          <h3>{digitalBenefits[0].title}</h3>
          <p>{digitalBenefits[0].copy}</p>
          <ul>
            {digitalBenefits[0].points.map((point) => (
              <li key={point}><FiCheck aria-hidden="true" />{point}</li>
            ))}
          </ul>
        </article>
      </div>

      {digitalBenefits.slice(1).map((benefit, index) => (
        <div className={index % 2 === 0 ? 'section digital-feature digital-feature-reverse' : 'section digital-feature'} key={benefit.title}>
          <PhoneMockup image={benefit.image} label={`${benefit.title} mobile banking screen`} />
          <article className="benefit-card">
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
              <ul>
                {benefit.points.map((point) => (
                  <li key={point}><FiCheck aria-hidden="true" />{point}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      ))}

      <div className="digital-cta-wrap">
        <CtaPanel />
      </div>
    </section>
  );
}

export default DigitalBankingSection;
