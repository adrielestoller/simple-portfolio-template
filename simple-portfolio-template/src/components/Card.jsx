import styles from "@/styles/card.module.css";

export default function Card({ title, description, icon: Icon }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {Icon && <Icon className={styles.icon} />}
        </div>
    );
}
