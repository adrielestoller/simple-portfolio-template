import Profile from "@/components/Profile";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Profile />
            </header>
            <main className={styles.main}></main>
            <footer className={styles.footer}></footer>
        </div>
    );
}
