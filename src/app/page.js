import Image from "next/image";
import styles from "@/styles/home.module.css";
import { K2D } from "next/font/google";

const k2d = K2D({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <main className={`${k2d.className} ${styles.main}`}>
      <section className={styles.hero_section}>
        <div className={styles.hero_section_container}>
          <h1>SOFTWARE DEVELOPER</h1>
          <img id={styles.hero_image} src="/images/hero_img.png" />
        </div>
      </section>
    </main>
  );
}
