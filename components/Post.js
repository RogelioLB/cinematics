import Link from 'next/link';
import styles from '../styles/Post.module.css';

function Tag({ content }) {
  return <span className={styles.tag}>{content}</span>;
}

export default function Post({ post }) {
  const {
    Title, publishedAt, categories, MainImage, content, slug,
  } = post.attributes;
  const tags = categories.data;
  const image = MainImage.data.attributes;
  const medium = image.formats?.medium;
  const { small } = image.formats;
  const url = medium?.url ?? small.url;
  return (
    <article className={styles.container}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.image_container}>
          <img src={url} alt={image.name} />
        </div>

        <h3 className={styles.title}>{Title}</h3>
        <p className={styles.content}>{content}</p>
        <footer className={styles.footer}>
          <span className={styles.date}>
            {new Date(publishedAt).toDateString()}
          </span>
          <div className={styles.tags_container}>
            {tags
              && tags.map((tag) => (
                <Tag content={tag.attributes.Name} key={tag.id} />
              ))}
          </div>
        </footer>
      </Link>
    </article>
  );
}
