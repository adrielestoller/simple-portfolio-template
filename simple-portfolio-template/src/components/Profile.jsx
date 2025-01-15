import Image from "next/image";

import styles from "@/styles/profile.module.css";
import wallpaper from "./../../public/gif-wallpaper.gif";
import user from "./../../public/user.jpg";

export default function Profile() {
    return (
        <div className={styles.container}>
            <Image
                src={wallpaper}
                alt="page wallpaper"
                className={styles.wallpaper}
                priority
            />
            <Image
                src={user}
                alt="user profile photo"
                className={styles.user}
            />
        </div>
    );
}
