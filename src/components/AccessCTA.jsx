import { useState } from 'react';
import styles from './AccessCTA.module.css';
import { useReveal } from '../hooks/useReveal';
import Button from './Button';

export default function AccessCTA() {
  const [ref, revealed] = useReveal();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: replace with a real call to your signup/waitlist endpoint.
    setSubmitted(true);
  }

  return (
    <section className={styles.section} id="access">
      <div className="container">
        <div ref={ref} className={`${styles.access} ${revealed ? styles.in : ''}`}>
          <div>
            <p className="eyebrow">Membership</p>
            <h2>Early access is the point.</h2>
            <p>
              Request an invitation to shop the Edit before it&rsquo;s public — and let Pulse tell
              you what&rsquo;s worth moving on.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.label} htmlFor="beben-access-email">Email</label>
            <div className={styles.row}>
              <input
                id="beben-access-email"
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                disabled={submitted}
                required
              />
              <Button type="submit" variant="gold" disabled={submitted}>
                Request Access
              </Button>
            </div>
            <p className={`${styles.helper} ${submitted ? styles.success : ''}`}>
              {submitted
                ? `You're on the list — check ${email} soon.`
                : 'We review requests within 48 hours — no spam, ever.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
