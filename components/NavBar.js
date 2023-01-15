import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cinematics</h1>
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
