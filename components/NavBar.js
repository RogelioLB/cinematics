import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cinematics</h1>
        <div className={styles.links}>
          <Link href="/">Inicio</Link>
          <Link>Categorias</Link>
          <Link>Contacto</Link>
        </div>
      </div>
    </div>
  );
}

function Link({children,href}) {
  return (
    <div className={styles.link}>
      <a href={href}>{children}</a>
      <span></span>
    </div>
  );
}
