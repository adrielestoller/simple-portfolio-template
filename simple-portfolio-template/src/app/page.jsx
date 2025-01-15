"use client";

import Card from "@/components/Card";
import Profile from "@/components/Profile";
import styles from "./page.module.css";
import { BookmarkIcon } from "lucide-react";

export default function Home() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Profile />
            </header>
            <main className={styles.main}>
                <Card
                    title="Title"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi earum deserunt ab nobis assumenda sequi repudiandae magni, maiores illum delectus quae, architecto laborum perferendis itaque alias repellat modi omnis."
                    icon={BookmarkIcon}
                />
            </main>
            <footer className={styles.footer}>
                <span className={styles.copyright}>&copy;</span> by Developer
            </footer>
        </div>
    );
}
