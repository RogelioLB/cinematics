import styles from "../styles/Post.module.css";

function Tag({ content }) {
  return <span className={styles.tag}>{content}</span>;
}

export default function Post({ post }) {
  const { Title, publishedAt, categories, MainImage, content, slug } =
    post.attributes;
  const tags = categories.data;
  const image = MainImage.data;
  return (
    <article className={styles.container}>
      <a href={`/posts/${slug}`}>
        <img
          src={image[0].attributes.formats.medium.url}
          alt={image.name}
        />
        <h3 className={styles.title}>{Title}</h3>
        <p className={styles.content}>{content}</p>
        <footer className={styles.footer}>
          <span className={styles.date}>
            {new Date(publishedAt).toDateString()}
          </span>
          <div className={styles.tags_container}>
            {tags &&
              tags.map((tag) => (
                <Tag content={tag.attributes.Name} key={tag.id} />
              ))}
          </div>
        </footer>
      </a>
    </article>
  );
}
