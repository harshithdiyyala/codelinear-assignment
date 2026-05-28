import { useState } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '../data/content.js';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="N7 home">N7</a>
      <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>
        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
        {navItems.map((item) => (
          <div className="nav-item" key={item.label}>
            <button type="button" className="nav-trigger">{item.label}<FiChevronDown aria-hidden="true" /></button>
            <div className="nav-menu">
              {item.items.map((subItem) => (
                <a href="#solutions" key={subItem}>{subItem}</a>
              ))}
            </div>
          </div>
        ))}
        <a className="nav-cta" href="#contact">Request Demo</a>
      </nav>
    </header>
  );
}

export default Header;
