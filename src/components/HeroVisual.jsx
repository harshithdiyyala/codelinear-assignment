function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Digital banking preview">
      <img className="hero-glow-image" src="/assets/hero/glow.svg" alt="" />
      <div className="hero-bg-card">
        <img src="/assets/hero/background.jpg" alt="" />
      </div>
      <img className="hero-overlay-card hero-balance-card" src="/assets/hero/balance-card.png" alt="Banking balance dashboard" />
      <img className="hero-overlay-card hero-activity-card" src="/assets/hero/activity-card.png" alt="Recent activity dashboard" />
    </div>
  );
}

export default HeroVisual;
