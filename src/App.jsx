
import { useCallback, useMemo, useState } from 'react';
import { FiArrowRight, FiCheck, FiArrowLeft } from 'react-icons/fi';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
import HeroVisual from './components/HeroVisual.jsx';
import PhoneMockup from './components/PhoneMockup.jsx';
import { caseStudies, coreFeatures, digitalBenefits, footerLinks, partners, posts, solutions } from './data/content.js';


function CtaPanel({ light = false }) {
  return (
    <section className={light ? 'cta-panel cta-panel-light' : 'cta-panel'}>
      <div>
        <h2>Take the full advantage of going paper-less now.</h2>
        <p>CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations</p>
      </div>
      <div className="cta-actions">
        <Button variant="outline">Contact Us</Button>
        <Button>Request Demo</Button>
      </div>
    </section>
  );
}

function App() {
   const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCaseStudy = useMemo(() => caseStudies[activeCaseIndex], [activeCaseIndex]);

  const showPreviousCase = useCallback(() => {
    setActiveCaseIndex((currentIndex) => (currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1));
  }, []);

  const showNextCase = useCallback(() => {
    setActiveCaseIndex((currentIndex) => (currentIndex + 1) % caseStudies.length);
  }, []);
  return (
    <div className="app" id="top">
      <Header />
      <main>
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

        <section className="section solutions-section" id="solutions">
          <div className="section-intro">
            <h3>All of our solutions are tailor-made to your needs</h3>
            <Button variant="outline">Request Demo</Button>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <div className="solution-icon" aria-hidden="true">
                  <img src={solution.icon} alt="" loading="lazy" />
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <a className="text-link" href="#contact">Learn More <FiArrowRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section split dark-feature">
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

        <section className="section split checklist-section">
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

        <CtaPanel />

        <section className="digital-section">
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

          <div style={{ paddingBottom: '4rem', textAlign: 'center', color: 'white', textAlign: 'left' }}>
            <CtaPanel/>
          </div>
        </section>

        

        <section className="section insights-section">
          <div className="section-intro">
            <h2>Get yourself up-to-speed on all the things happening in fintech</h2>
            <Button variant="outline">Insights</Button>
          </div>
          <div className="post-grid">
            {posts.map((post, index) => (
              <article className={index === 0 ? 'post-card post-card-featured' : 'post-card'} key={post}>
                {index === 0 && (
                  <img src="/assets/case-pattern.png" alt="" loading="lazy" />
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
        <section className="section case-studies">
            <h2 className="center-title">Our Case Studies</h2>
          <div className="case-card">
            
              <img src="/assets/case-pattern.png" alt="" loading="lazy" className='case-image' />
            
            <div>
              <span>Getting Started</span>
              <h3>{activeCaseStudy.title}</h3>
              <img src={activeCaseStudy.companyLogo} alt={activeCaseStudy.company} className="carousel-company-logo" loading="lazy" />
              <Button variant="outline">Read More</Button>
            </div>
          </div>
          <div className="carousel-controls" aria-label="Case study carousel controls">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'center' }}>
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

            <a className="text-link insights-link" href="#top" style={{ justifySelf: 'flex-end' }}>VIEW ALL <FiArrowRight aria-hidden="true" /></a>
          </div>
         </section> 
      </main>

      <footer className="footer" id="contact">
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
    </div>
  );
}

export default App;

