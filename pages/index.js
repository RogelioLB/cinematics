import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AsideCategories from "../components/AsideCategories";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import {Markdown as md} from "node-markdown"

export default function Home({posts,pagination}) {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type: "LOAD_POSTS",payload:posts})
    dispatch({type:"CHANGE_NAVIGATION",payload:pagination})
  },[posts,dispatch,pagination])

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <MainContent />
        <AsideCategories />
      </div>
      <Footer />
    </>
  );
}


export async function getServerSideProps(){
  const res = await axios("https://strapi-production-9ea0.up.railway.app/api/posts",{
    params:{
      populate:"*"
    }
  })
  const data = res.data
  const posts = data.data.map((post)=>{
    const content = md(post.attributes.Content,true,"h5")
    return {
      ...post,
      attributes: {content,...post.attributes}
    }
  })
  const {pagination} = data.meta
  return{
    props:{
      posts,
      pagination
    }
  }
}