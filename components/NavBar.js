import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <span className={styles.title}>Cinematics</span>
        <div className={styles.links}>
          <LinkComponent href="/">Inicio</LinkComponent>
        </div>
      </div>
    </div>
  );
}

function LinkComponent({ children, href }) {
  return (
    <div className={styles.link}>
      <Link href={href}>{children}</Link>
      <span></span>
    </div>
  );
}
