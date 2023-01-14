import { useEffect } from "react"
import { useSelector } from "react-redux"
import styles from "../styles/Home.module.css"

function Category({name}){
    return(
        <span className={styles.category}>{name}</span>
    )
}


export default function Categories(props){
    const categories = useSelector(state=>state.categories)

    return(
        <>
          <h2>Categorias</h2>
          <div className={styles.categories_container}>
              {
                  categories && categories.map((category,id)=><Category key={category.id} name={category.attributes.Name}/>)
              }
          </div>
        </>
    )
}