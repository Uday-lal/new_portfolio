import styles from "@/styles/Buttons.module.css";

function SpecialButton(props) {
  return (
    <>
      <div style={props.style} className={styles.special_btn_container}>
        <button style={props.style} className={styles.special_btn}>
          {props.children}
        </button>
      </div>
    </>
  );
}

export default SpecialButton;
