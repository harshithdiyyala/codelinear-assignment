function PhoneMockup({ image, label, className = '' }) {
  return (
    <div className={`phone-mockup ${className}`}>
      <img src={image} alt={label} loading="lazy" />
    </div>
  );
}

export default PhoneMockup;
