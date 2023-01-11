import { useSelector } from "react-redux";
import styles from "../styles/Pagination.module.css";

function Page({ number, focus }) {
  return (
    <>
      {focus ? (
        <div className={focus ? styles.page_focus : styles.page}>
          <span>{number}</span>
        </div>
      ) : (
        <div className={styles.page}>
          <span>{number}</span>
        </div>
      )}
    </>
  );
}

export default function Pagination() {
  const pagination = useSelector((state) => state.pagination);

  return (
    <div className={styles.pagination_wrapper}>
      {pagination.pageCount &&
        Array(pagination.pageCount).fill("").map((_, i) => {
          const page = i+1
          return <Page number={page} focus={page===pagination.page ? true : false} key={i}/>
        })}
    </div>
  );
}
