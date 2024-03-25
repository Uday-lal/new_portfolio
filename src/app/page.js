import Image from "next/image";
import styles from "@/styles/home.module.css";
import SpecialButton from "./components/Button";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <section className={styles.hero_section}>
          <div className={styles.hero_section_container}>
            <h1>SOFTWARE DEVELOPER</h1>
            <img id={styles.hero_image} src="/images/hero_img.png" />
            <SpecialButton>Explore</SpecialButton>
          </div>
        </section>
      </main>
    </>
  );
}
