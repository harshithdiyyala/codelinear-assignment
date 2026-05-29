import { FiArrowRight } from 'react-icons/fi';
import Button from './Button.jsx';
import { solutions } from '../data/content.js';
import useReveal from '../hooks/useReveal.js';
import './SolutionsSection.css';

function SolutionsSection() {
  const sectionRef = useReveal();

  return (
    <section className="section solutions-section reveal-section" id="solutions" ref={sectionRef}>
      <div className="section-intro">
        <h3>All of our solutions are tailor-made to your needs</h3>
        <Button variant="outline">Request Demo</Button>
      </div>
      <div className="solution-grid">
        {solutions.map((solution) => (
          <article className="solution-card" key={solution.title}>
            <div className="solution-card-header">
              <div className="solution-icon" aria-hidden="true">
                <img src={solution.icon} alt="" loading="lazy" />
              </div>
              {solution.tag && <span className="solution-tag">{solution.tag}</span>}
            </div>
            <h3>{solution.title}</h3>
            <p>{solution.copy}</p>
            <a className="text-link" href="#contact">Learn More <FiArrowRight aria-hidden="true" /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SolutionsSection;
