import styles from './Post.module.css';
import { Link } from 'react-router-dom';

function Post({author, body ,id}) {
  return (
    <li className={styles.post}>
      <Link to={id}>
      <h4 className={styles.author}>{author}</h4>
      <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
