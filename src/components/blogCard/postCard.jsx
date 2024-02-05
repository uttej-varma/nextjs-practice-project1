import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topPart}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/13398438/pexels-photo-13398438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <span className={styles.date}>jan 24 2024</span>
      </div>
      <div className={styles.bottomPart}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas excepturi aliquid suscipit esse, omnis fuga consequuntur? Deserunt nisi, culpa adipisci libero provident ipsam totam corrupti fuga in expedita mollitia fugiat.</p>
        <Link href="/blog/post" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
