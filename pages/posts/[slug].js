import axios from "axios";
import stylesHome from "../../styles/Home.module.css";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from "../../styles/Content.module.css"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Aside from "../../components/Aside";
import { NextSeo } from "next-seo";
import { Markdown as md} from "node-markdown";

export default function PagePost({ post, source,content }) {
  const { Title, MainImage } = post.attributes;
  const formats = MainImage.data.attributes.formats;
  const large = formats.large
  const medium = formats.medium
  const small = formats.small
  return (
    <>
    <NextSeo title={Title} description={content} images={[large,medium,small]}/>
      <NavBar />
      <div className={stylesHome.container}>
        <div className={styles.content}>
          <img
            src={large.url}
          />
          <h1>{Title}</h1>
          <div className={styles.md}>
            <MDXRemote {...source}/>
          </div>
        </div>
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { slug } = ctx.query;
  const res = await axios(`https://strapi-production-9ea0.up.railway.app/api/posts/${slug}`, {
    params: { populate: "*" },
  });
  const data = res.data;
  const post = data.data;
  const source = await serialize(post.attributes.Content)
  const content = md(post.attributes.Content, true, "h5");
  return {
    props: {
      post,
      source,
      content
    },
  };
}
