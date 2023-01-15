import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Markdown as md } from 'node-markdown';
import { NextSeo } from 'next-seo';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
import Aside from '../components/Aside';
import Categories from '../components/Categories';

export default function Home({ posts, pagination }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_POSTS', payload: posts });
    dispatch({ type: 'CHANGE_NAVIGATION', payload: pagination });
  }, [posts, dispatch, pagination]);

  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            name: 'keywords',
            contet:
              'blog de cine, blog de cine en español, cine, cinema, peliculas',
          },
        ]}
        title=" Cinematics | Oficial Page "
        description="Blog dedicado a hablar sobre series y peliculas, reseñas, opiniones, noticias y mucho más."
      />
      <NavBar />
      <div className={styles.container}>
        <MainContent />
        <Aside>
          <Categories />
        </Aside>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios(
    'https://strapi-production-9ea0.up.railway.app/api/posts',
    {
      params: {
        populate: '*',
        sort: 'createdAt:desc',
      },
    },
  );
  const { data } = res;
  const posts = data.data.map((post) => {
    const content = md(post.attributes.Content, true, 'h5');
    return {
      ...post,
      attributes: { content, ...post.attributes },
    };
  });
  const { pagination } = data.meta;
  return {
    props: {
      posts,
      pagination,
    },
  };
}
