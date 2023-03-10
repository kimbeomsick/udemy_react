import styles from './Post.module.css';

function Post(props) {
  return (
    <li className={styles.post}>
      <h4 className={styles.author}>{props.author}</h4>
      <p className={styles.text}>{props.body}</p>
    </li>
  );
}

export default Post;
