import styles from './Footer.module.css';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      ['#edit', 'The Edit'],
      ['#pulse', 'Pulse'],
      ['#access', 'Access'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['#top', 'About'],
      ['#top', 'Journal'],
      ['#top', 'Careers'],
    ],
  },
  {
    title: 'Support',
    links: [
      ['#top', 'Contact'],
      ['#top', 'Shipping'],
      ['#top', 'Returns'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <span className={styles.mark}>BEBEN</span>
            <p className={styles.tagline}>Luxury, intelligently curated.</p>
          </div>

          <div className={styles.cols}>
            {COLUMNS.map((col) => (
              <div key={col.title} className={styles.col}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map(([href, label], i) => (
                    <li key={i}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; 2026 BEBEN. All rights reserved.</span>
          <span>Designed with BEBEN Pulse intelligence.</span>
        </div>
      </div>
    </footer>
  );
}
