import Image from "next/image";
import styles from "./home.module.css";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, ut.
          Libero, voluptatem excepturi? Mollitia obcaecati laudantium autem
          dolorum.
        </p>
        <div className={styles.buttonContainer}>
           <button className={styles.button}>Learn More</button>
           <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
            <Image src='/brands.png' alt='' fill className={styles.brand}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/hero.gif' alt='' fill/>
      </div>
    </div>
  );
};

export default HomePage;
