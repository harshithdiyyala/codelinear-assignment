function Button({ children, variant = 'primary', href = '#contact' }) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
    </a>
  );
}

export default Button;
