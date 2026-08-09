import styles from './Button.module.css';

export default function Button({
  href,
  onClick,
  type = 'button',
  variant = 'gold',
  size = 'md',
  disabled = false,
  icon,
  children,
}) {
  const className = [
    styles.btn,
    variant === 'gold' ? styles.gold : styles.ghost,
    size === 'sm' ? styles.sm : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
      {icon}
    </button>
  );
}
