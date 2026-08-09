import styles from './PulseSection.module.css';
import { useReveal } from '../hooks/useReveal';

// Swap this array for a real feed (e.g. from your trend-detection API).
const TRENDS = [
  { rank: '01', name: 'The Solstice Cuff', category: 'Fine Jewelry', change: 64, bars: [25, 35, 30, 50, 65, 100] },
  { rank: '02', name: 'Meridian Chronograph', category: 'Timepieces', change: 41, bars: [40, 30, 45, 55, 60, 85] },
  { rank: '03', name: 'Aurum Weekend Bag', category: 'Leather Goods', change: 37, bars: [35, 50, 40, 55, 65, 80] },
  { rank: '04', name: 'The Ines Silk Scarf', category: 'Accessories', change: 29, bars: [45, 40, 55, 50, 60, 72] },
];

export default function PulseSection() {
  const [headRef, headRevealed] = useReveal();
  const [gridRef, gridRevealed] = useReveal();

  return (
    <section className={styles.section} id="pulse">
      <div className="container">
        <div ref={headRef} className={`${styles.head} ${headRevealed ? styles.in : ''}`}>
          <p className="eyebrow">BEBEN Pulse</p>
          <h2>Demand, read in real time.</h2>
          <p>
            Every piece in the Edit is scored against live signals — search interest, sell-through,
            editorial mentions — so you see what&rsquo;s actually gaining ground, not just what&rsquo;s in stock.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {TRENDS.map((t, i) => (
            <article
              key={t.rank}
              className={`${styles.card} ${gridRevealed ? styles.in : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.rank}>{t.rank}</span>
                <span className={styles.live}>
                  <span className={styles.dot} aria-hidden="true" />
                  Live
                </span>
              </div>

              <h3 className={styles.name}>{t.name}</h3>
              <p className={styles.cat}>{t.category}</p>

              <div
                className={styles.chart}
                role="img"
                aria-label={`Demand trend rising ${t.change} percent this week`}
              >
                {t.bars.map((h, idx) => (
                  <span key={idx} style={{ height: `${h}%` }} />
                ))}
              </div>

              <p className={styles.stat}>
                +{t.change}%<span>this week</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
