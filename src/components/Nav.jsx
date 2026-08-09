import { useState } from 'react';
import styles from './Nav.module.css';
import Button from './Button';
import { IconMenu, IconClose } from './Icons';

const LINKS = [
  { href: '#pulse', label: 'Pulse' },
  { href: '#edit', label: 'Collection' },
  { href: '#access', label: 'Access' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.mark}>BEBEN</a>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.desktopCta}>
            <Button href="#access" variant="gold" size="sm">Request Access</Button>
          </span>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="beben-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div className={styles.mobileMenu} id="beben-mobile-menu" data-open={open}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
