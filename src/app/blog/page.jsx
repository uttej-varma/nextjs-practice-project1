import PostCard from '@/components/blogCard/postCard';
import styles from './blogPage.module.css'
const BlogPage=()=>{
    return(
        <div className={styles.container}>
         <div className={styles.postContainer}>
         <PostCard></PostCard>
         </div>
         <div className={styles.postContainer}>
         <PostCard></PostCard>
         </div>
         <div className={styles.postContainer}>
         <PostCard></PostCard>
         </div>
         <div className={styles.postContainer}>
         <PostCard></PostCard>
         </div>
        </div>
    )
}

export default BlogPage;