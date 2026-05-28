import { FiArrowRight } from 'react-icons/fi';
import Button from './Button.jsx';
import { posts } from '../data/content.js';
import useReveal from '../hooks/useReveal.js';
import './InsightsSection.css';

function InsightsSection() {
  const sectionRef = useReveal();

  return (
    <section className="section insights-section reveal-section" ref={sectionRef}>
      <div className="section-intro">
        <h2>Get yourself up-to-speed on all the things happening in fintech</h2>
        <Button variant="outline">Insights</Button>
      </div>
      <div className="post-grid">
        {posts.map((post, index) => (
          <article className={index === 0 ? 'post-card post-card-featured' : 'post-card'} key={post}>
            {index === 0 && (
              <img src="/assets/patterns/case-pattern.svg" alt="" loading="lazy" />
            )}
            <div>
              <span>Getting Started</span>
              <h3>{post}</h3>
              <p>David Grohl&nbsp;&nbsp;&nbsp; 17/08/24</p>
            </div>
            <Button variant="outline">Read More</Button>
          </article>
        ))}
        <a className="text-link insights-link" href="#top">Read All Insights <FiArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export default InsightsSection;
