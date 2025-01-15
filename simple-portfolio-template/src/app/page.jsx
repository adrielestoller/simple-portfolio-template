"use client";

import Card from "@/components/Card";
import Profile from "@/components/Profile";
import LinkRow from "@/components/LinkRow";
import styles from "./page.module.css";
import { BookIcon, BookOpen, Github } from "lucide-react";

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
                    icon={BookOpen}
                />
                <Card
                    subtitle="Article"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi earum deserunt ab nobis assumenda sequi repudiandae magni, maiores illum delectus quae, architecto laborum perferendis itaque alias repellat modi omnis."
                    icon={BookIcon}
                    link="#"
                />
                <Card
                    subtitle="Article"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi earum deserunt ab nobis assumenda sequi repudiandae magni, maiores illum delectus quae, architecto laborum perferendis itaque alias repellat modi omnis."
                    icon={BookIcon}
                    link="#"
                />
            </main>
            <LinkRow link="" icon={Github} />
            <footer className={styles.footer}>
                <span className={styles.copyright}>&copy;</span> by Developer
            </footer>
        </div>
    );
}
