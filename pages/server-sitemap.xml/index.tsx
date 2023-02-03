import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await axios('https://strapi-production-9ea0.up.railway.app/api/posts');
  const { data } = res;
  const posts = data.data;
  const urls = posts.map((post) => ({ loc: `https://cinematics.vercel.app/posts/${post.attributes.slug}`, lastmod: post.attributes.updatedAt, priority: 0.6 }));
  return getServerSideSitemap(ctx, urls);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
