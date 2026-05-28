import { useCallback, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Button from './Button.jsx';
import { caseStudies } from '../data/content.js';
import useReveal from '../hooks/useReveal.js';
import './CaseStudiesSection.css';

function CaseStudiesSection() {
  const sectionRef = useReveal();
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCaseStudy = caseStudies[activeCaseIndex];

  const showPreviousCase = useCallback(() => {
    setActiveCaseIndex((currentIndex) => (currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1));
  }, []);

  const showNextCase = useCallback(() => {
    setActiveCaseIndex((currentIndex) => (currentIndex + 1) % caseStudies.length);
  }, []);

  return (
    <section className="section case-studies reveal-section" ref={sectionRef}>
      <h2 className="center-title">Our Case Studies</h2>
      <article className="case-card" key={activeCaseStudy.company}>
        <img src="/assets/patterns/case-pattern.svg" alt="" loading="lazy" className="case-image" />
        <div className="case-content">
          <span>{activeCaseStudy.category}</span>
          <h3>{activeCaseStudy.title}</h3>
          <img src={activeCaseStudy.companyLogo} alt={activeCaseStudy.company} className="carousel-company-logo" loading="lazy" />
          <Button variant="outline">Read More</Button>
        </div>
      </article>
      <div className="carousel-controls" aria-label="Case study carousel controls">
        <div className="carousel-nav">
          <button className="carousel-button" type="button" onClick={showPreviousCase} aria-label="Previous case study"><FiArrowLeft aria-hidden="true" /></button>
          {caseStudies.map((caseStudy, index) => (
            <button
              className={index === activeCaseIndex ? 'dot active' : 'dot'}
              key={caseStudy.company}
              onClick={() => setActiveCaseIndex(index)}
              type="button"
              aria-label={`Show ${caseStudy.company} case study`}
              aria-current={index === activeCaseIndex}
            />
          ))}
          <button className="carousel-button" type="button" onClick={showNextCase} aria-label="Next case study"><FiArrowRight aria-hidden="true" /></button>
        </div>
        <a className="text-link case-view-all" href="#top">View All <FiArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
