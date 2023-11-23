import { Link } from "react-router-dom";
import styles from "./BaseLayout.module.scss";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";

export default function BaseLayout({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const preferredTheme = localStorage.getItem("theme");

    const systemPreferredDarkTheme =
      window.matchMedia &&
      window.matchMedia("(perfers-color-scheme: dark)").matches;

    if (preferredTheme) return setIsDarkTheme(preferredTheme === "dark");

    setIsDarkTheme(systemPreferredDarkTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");

    if (isDarkTheme) {
      document.querySelector("html").classList.remove("theme-light");
      document.querySelector("html").classList.add("theme-dark");
    } else {
      document.querySelector("html").classList.add("theme-light");
      document.querySelector("html").classList.remove("theme-dark");
    }
  }, [isDarkTheme]);

  const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/">
            <h1 className={styles.title}>Where is the world?</h1>
          </Link>
          <IconButton onClick={toggleDarkTheme}>
            {isDarkTheme ? (
              <LightMode sx={{ color: "white" }} />
            ) : (
              <DarkMode sx={{ color: "val(--text)" }} />
            )}
          </IconButton>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}
