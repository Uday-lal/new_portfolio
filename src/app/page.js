import Image from "next/image";
import styles from "@/styles/home.module.css";
import SpecialButton from "./components/Button";
import SectionTitle from "./components/SectionTitle";
import Header from "./components/Header";
import Grid from "@mui/material/Grid";

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
        <section className={styles.about_section}>
          <div className={styles.container}>
            <Grid container spacing={5}>
              <Grid item xs={8}>
                <SectionTitle>About Me</SectionTitle>
                <p className={`${styles.site_text} ${styles.about_text}`}>
                  Lorem ipsum dolor sit amet consectetur. Mollis bibendum nam
                  tristique tortor. Ullamcorper commodo pretium mi vitae at
                  tempor vestibulum. Molestie sit facilisi nulla integer
                  consectetur nulla. Eget dis nisi porttitor lacus feugiat
                  tortor fringilla nunc sed.
                </p>
                <p className={`${styles.site_text} ${styles.about_text}`}>
                  Lorem ipsum dolor sit amet consectetur. Mollis bibendum nam
                  tristique tortor. Ullamcorper commodo pretium mi vitae at
                  tempor vestibulum. Molestie sit facilisi nulla integer
                  consectetur nulla. Eget dis nisi porttitor lacus feugiat
                  tortor fringilla nunc sed.
                </p>
              </Grid>
              <Grid className={styles.about_image_container} item xs={4}>
                <img src="/images/my_boy.jpg" alt="my_boy_image" />
              </Grid>
            </Grid>
          </div>
        </section>
      </main>
    </>
  );
}
