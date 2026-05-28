import Button from './Button.jsx';
import useReveal from '../hooks/useReveal.js';
import './CtaPanel.css';

function CtaPanel({ light = false }) {
  const sectionRef = useReveal();

  return (
    <section className={light ? 'cta-panel cta-panel-light reveal-section' : 'cta-panel reveal-section'} ref={sectionRef}>
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

export default CtaPanel;
