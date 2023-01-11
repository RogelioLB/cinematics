import Post from "./Post";
import styles from "../styles/Home.module.css";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

export default function MainContent() {
  const posts = useSelector(store=>store.posts)
  return (
    <section className={styles.main_content}>
      <h2 className={styles.subtitle}>Publicaciones Recientes</h2>
      <div className={styles.posts_container}>
        {
          posts && (
            posts.map(post=>(
              <Post key={post.id} post={post}/>
            ))
          )
        }
      </div>
      <Pagination />
    </section>
  );
}
