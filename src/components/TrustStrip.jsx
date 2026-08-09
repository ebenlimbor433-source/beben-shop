import styles from './TrustStrip.module.css';
import { useReveal } from '../hooks/useReveal';
import { IconShield, IconBox, IconPulse, IconSparkle } from './Icons';

const ITEMS = [
  { Icon: IconShield, text: 'Verified provenance on every piece' },
  { Icon: IconBox, text: 'Insured, white-glove delivery' },
  { Icon: IconPulse, text: 'New arrivals surfaced by BEBEN Pulse' },
  { Icon: IconSparkle, text: 'Members-first access windows' },
];

export default function TrustStrip() {
  const [ref, revealed] = useReveal();

  return (
    <section className={styles.trust}>
      <div className="container">
        <div ref={ref} className={styles.grid}>
          {ITEMS.map(({ Icon, text }, i) => (
            <div
              key={text}
              className={`${styles.item} ${revealed ? styles.in : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon className={styles.icon} />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
