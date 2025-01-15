import Link from "next/link";
import styles from "@/styles/card.module.css";

export default function Card({
    title,
    subtitle,
    description,
    icon: Icon,
    link,
}) {
    if (link) {
        return (
            <Link
                href={link}
                target="_blank"
                className={`${styles.container} ${styles.link}`}
            >
                {title && <h2 className={styles.title}>{title}</h2>}
                {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
                <p className={styles.description}>{description}</p>
                {Icon && <Icon className={styles.icon} />}
            </Link>
        );
    }

    return (
        <div className={styles.container}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
            <p className={styles.description}>{description}</p>
            {Icon && <Icon className={styles.icon} />}
        </div>
    );
}
