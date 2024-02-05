import Image from "next/image";
import styles from './blog.module.css'
const SingleBlog=()=>{
    return(
        <div className={styles.container}>
      
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/13398438/pexels-photo-13398438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
      
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
        <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>
              uttej varma
            </span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
               10-11-2020
            </span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquid iure, architecto commodi cupiditate quia! Nemo illo nesciunt perspiciatis laudantium aliquid suscipit magni nam recusandae? Aut ipsa dolor iusto quia?</div>
      </div>
    </div>
    )
}
export default SingleBlog;