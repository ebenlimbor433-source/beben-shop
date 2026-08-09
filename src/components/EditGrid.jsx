import styles from './EditGrid.module.css';
import { useReveal } from '../hooks/useReveal';
import { IconSparkle } from './Icons';

// Placeholder catalog — swap for real product data + photography.
// The monogram letter is a deliberate stand-in for product photos; see README.
const PRODUCTS = [
  { letter: 'S', name: 'The Solstice Cuff', category: 'Fine Jewelry', price: '$1,240' },
  { letter: 'M', name: 'Meridian Chronograph', category: 'Timepieces', price: '$4,850' },
  { letter: 'A', name: 'Aurum Weekend Bag', category: 'Leather Goods', price: '$2,180' },
  { letter: 'I', name: 'The Ines Silk Scarf', category: 'Accessories', price: '$390' },
  { letter: 'V', name: 'Vesper Signet Ring', category: 'Fine Jewelry', price: '$780' },
  { letter: 'C', name: 'The Callo Loafers', category: 'Footwear', price: '$960' },
];

export default function EditGrid() {
  const [headRef, headRevealed] = useReveal();
  const [gridRef, gridRevealed] = useReveal();

  return (
    <section className={styles.section} id="edit">
      <div className="container">
        <div ref={headRef} className={`${styles.head} ${headRevealed ? styles.in : ''}`}>
          <p className="eyebrow">The Current Edit</p>
          <h2>Six pieces, hand-set for this season.</h2>
          <p>Curated by the BEBEN team, ranked by Pulse. Availability moves with demand — the Edit is refreshed weekly.</p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className={`${styles.card} ${gridRevealed ? styles.in : ''}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className={styles.art}>
                <span aria-hidden="true">{p.letter}</span>
                <IconSparkle className={styles.artIcon} />
              </div>
              <div className={styles.info}>
                <div>
                  <h3>{p.name}</h3>
                  <p className={styles.cat}>{p.category}</p>
                </div>
                <span className={styles.price}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
