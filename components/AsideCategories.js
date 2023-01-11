import styles from "../styles/Home.module.css"

function Category({name}){
    return(
        <span className={styles.category}>{name}</span>
    )
}

export default function Aside(props){
    const categories = ["Dreamworks"]
    return(
        <div className={styles.aside}>
          <h2>Categorias</h2>
          <div className={styles.categories_container}>
              {
                  categories && categories.map((category,id)=><Category key={id} name={category}/>)
              }
          </div>
        </div>
    )
}