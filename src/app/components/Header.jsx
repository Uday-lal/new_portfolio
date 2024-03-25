import styles from "@/styles/Header.module.css";
import SpecialButton from "./Button";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
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
                <a href="#">Skills</a>
              </li>
              <li className={styles.resume_btn_container}>
                <SpecialButton
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
