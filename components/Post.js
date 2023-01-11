import styles from "../styles/Post.module.css";
import Image from 'next/image'

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
      <div className={styles.image_container}>
  <Image src={image.attributes.formats.medium.url} layout="fill" className={styles.image} alt={image.attributes.name}/>
</div>

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
