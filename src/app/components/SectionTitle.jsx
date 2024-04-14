import styles from "@/styles/SectionTitle.module.css";

function SectionTitle(props) {
  return (
    <>
      <h2 className={styles.section_title}>{props.children}</h2>
    </>
  );
}

export default SectionTitle;
