import styles from "./about.module.css";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>About Agency</h1>
        <p className={styles.title}>
          We create digital Ideas that are bigger,bolder,braver and better.
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          reiciendis provident velit natus porro aliquid esse maiores dolorem
          rem quidem aliquam totam quisquam quam tenetur, reprehenderit omnis
          non quas recusandae.
        </p>
        <div className={styles.stats}>
          <div className={styles.statContainer}>
            <div className={styles.statVAlue}>10<span>{' '}</span>k+</div>
            <p className={styles.statDescription}>Years of experience</p>
          </div>
          <div className={styles.statContainer}>
            <div className={styles.statVAlue}>234<span>{' '} </span>k+</div>
            <p className={styles.statDescription}>People reached</p>
          </div>
          <div className={styles.statContainer}>
            <div className={styles.statVAlue}>5<span> {' '}</span>k+</div>
            <p className={styles.statDescription}>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="" fill className={styles.image}/>
      </div>
    </div>
  );
};

export default AboutPage;
