import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/PostAside.module.css';

export default function PostAside({ post }) {
  const [posts, setPosts] = useState(null);
  const { slug } = post.attributes;
  useEffect(() => {
    const getSuggestPosts = async () => {
      const res = await axios(
        'https://strapi-production-9ea0.up.railway.app/api/posts',
        {
          params: { populate: '*', 'filters[slug][$ne]': slug, randomSort: true },
        },
      );
      const { data } = res;
      const postsData = data.data.slice(0, 2);
      setPosts(postsData);
    };
    getSuggestPosts();
  }, [slug]);

  return (
    <article className={styles.container}>
      {posts
        && posts.map((post) => {
          const {
            Title, MainImage, slug,
          } = post.attributes;
          const image = MainImage.data.attributes;
          const medium = image.formats?.medium;
          const { small } = image.formats;
          const url = medium?.url ?? small.url;
          return (
            <Link
              href={`/posts/${slug}`}
              className={styles.container_card}
              key={post.id}
            >
              <img src={url} alt={image.name} />
              <h3>{Title}</h3>
            </Link>
          );
        })}
    </article>
  );
}
