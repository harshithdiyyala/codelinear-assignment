import { FiBell, FiGrid, FiPlusCircle, FiSend } from 'react-icons/fi';

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Digital banking preview">
      <img className="hero-main-image" src="/assets/hero-banking.jpg" alt="" />

      <section className="hero-card hero-balance-card" aria-label="Toni Kross balance card">
        <div className="balance-header">
          <span className="avatar" aria-hidden="true" />
          <div>
            <strong>Toni Kross</strong>
            <span>Good Morning</span>
          </div>
          <button type="button" aria-label="Notifications">
            <FiBell aria-hidden="true" />
          </button>
        </div>
        <p>Total balance</p>
        <b>$42,295.00 USD</b>
        <div className="hero-actions-grid">
          <span><FiSend aria-hidden="true" />Fund Transfer</span>
          <span><FiPlusCircle aria-hidden="true" />Add Money</span>
          <span><FiGrid aria-hidden="true" />More</span>
        </div>
      </section>

      <section className="hero-card hero-activity-card" aria-label="Recent activity card">
        <h3>Recent activity</h3>
        <div className="activity-tabs" aria-label="Activity timeframe">
          <span>This Day</span>
          <span className="active">This Week</span>
          <span>This Month</span>
          <span>6 Month</span>
        </div>
        <div className="activity-row">
          <span className="activity-icon">↗</span>
          <div>
            <strong>To Jin <span>· Work</span></strong>
            <p>12 jun 2022</p>
          </div>
          <b>-$59</b>
        </div>
        <span className="activity-rule" aria-hidden="true" />
      </section>
    </div>
  );
}

export default HeroVisual;
