import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <span className={styles.created_by}>Creado por <strong>RogelioLB</strong></span>
            </div>
        </footer>
  );
}
