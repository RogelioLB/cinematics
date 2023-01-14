import styles from "../styles/Home.module.css"
import Newsletter from "./Newsletter"

export default function Aside({children}){
    return(
        <div className={styles.aside}>
            {children}
          <Newsletter strapiEndpoint="https://strapi-production-9ea0.up.railway.app/" buttonText="Sucribete" />
        </div>
    )
}