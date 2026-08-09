import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import Button from './Button';
import { IconArrowRight } from './Icons';

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const inClass = (cls) => `${cls} ${ready ? styles.in : ''}`;

  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <p className={inClass(`eyebrow ${styles.eyebrow}`)}>AI-Curated · Members Only</p>

        <h1 className={styles.title}>
          <span className={inClass(styles.line)} style={{ transitionDelay: '90ms' }}>
            What&rsquo;s rare,
          </span>
          <span className={inClass(styles.line)} style={{ transitionDelay: '160ms' }}>
            before it&rsquo;s <em>everywhere.</em>
          </span>
          <span className={styles.sheen} aria-hidden="true" />
        </h1>

        <p className={inClass(styles.sub)}>
          BEBEN pairs a hand-vetted edit of fine goods with Pulse — an intelligence layer that
          reads real-world demand — so what you&rsquo;re offered is both exceptional and exactly early.
        </p>

        <div className={inClass(styles.ctas)}>
          <Button href="#edit" variant="gold">Explore the Edit</Button>
          <Button href="#pulse" variant="ghost" icon={<IconArrowRight />}>
            See What&rsquo;s Rising
          </Button>
        </div>
      </div>
    </section>
  );
}
