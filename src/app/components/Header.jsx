"use client";
import styles from "@/styles/Header.module.css";
import SpecialButton from "./Button";
import { useEffect, useState } from "react";

function Header(props) {
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = (e) => {
    const { pageYOffset, scrollY } = window;
    if (scrollY > 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={!isScrolling ? styles.header : styles.header_scrolling}
      >
        <div className={styles.header_container}>
          <div className={styles.header_left_section}>
            <h3>Hey, I'm Uday</h3>
          </div>
          <div className={styles.header_right_section}>
            <ul>
              <li>
                <a href="#">About Me</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li className={styles.resume_btn_container}>
                <SpecialButton
                  className={isScrolling ? styles.resume_btn : ""}
                  style={{
                    margin: "0px",
                  }}
                >
                  Resume
                </SpecialButton>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
