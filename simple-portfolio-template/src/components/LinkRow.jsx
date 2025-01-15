import Link from "next/link";
import styles from "@/styles/linkRow.module.css";

export default function LinkRow({ link, icon: Icon }) {
    return (
        <div className={styles.container}>
            <Link className={styles.link} href={link} target="_blank">
                {Icon && <Icon className={styles.icon} />}
            </Link>
        </div>
    );
}
