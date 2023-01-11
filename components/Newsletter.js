import axios from "axios";
import { useState } from "react";
import styles from "../styles/Newsletter.module.css";

export default function Newsletter({ strapiEndpoint, buttonText }) {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${strapiEndpoint}/strapi-newsletter/newsletter/subscribe`,
      { email: email }
    );
    const data = res.data;
    if (data.createdAt) {
      setMessage("Sucrito correctamente.");
      setShowMessage(true);
    } else {
      setError(true);
      setShowMessage("A ocurrido un error.");
    }
    setEmail("");
    setTimeout(() => {
      setMessage("");
      setError(null);
      setShowMessage(false);
    }, 4000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <span>Suscribete para recibir cuando haya nuevas publicaciones.</span>
      <div className={styles.form_group}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={styles.form_input}
          placeholder="example@example"
          id="email"
          type="email"
        />
      </div>
      <div className={styles.form_group}>
        <input
          className={styles.form_input}
          type="submit"
          id="submit"
          value={buttonText}
        />
      </div>
      {showMessage && (
        <div className={styles.form_group}>
          {error && <p className={styles.error}>{message}</p>}
          {message && <p className={styles.message}>{message}</p>}
        </div>
      )}
    </form>
  );
}
