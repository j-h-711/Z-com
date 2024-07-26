import Link from "next/link";
import styles from "./trend.module.css";

export default function Trend({ trend }) {
  return (
    <>
      <Link href={`/search?q=${trend.title}`} className={styles.container}>
        <div className={styles.count}>{trend.title}</div>
        <div className={styles.title}>{trend.user}</div>
        <div className={styles.count}>posts : {trend.count}</div>
      </Link>
    </>
  );
}
