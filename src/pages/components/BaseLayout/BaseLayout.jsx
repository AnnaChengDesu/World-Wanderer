import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export default function BaseLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/">
            <h1 className={styles.title}>Where is the world?</h1>
          </Link>
          <div>Dark Mode</div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}

// BaseLayout.propTypes = {
//   children: node.isRequired,
// };
