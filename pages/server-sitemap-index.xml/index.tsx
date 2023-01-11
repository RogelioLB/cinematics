import { getServerSideSitemapIndex } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import axios from 'axios'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const res = await axios("https://strapi-production-9ea0.up.railway.app/api/posts")
  const data = res.data
  const posts = data.data
  const urls = posts.map(post=>`https://cinematics.vercel.app/${post.attributes.slug}`)

  return getServerSideSitemapIndex(ctx, urls)
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}