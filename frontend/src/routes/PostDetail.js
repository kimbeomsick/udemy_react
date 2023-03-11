import Modal from "../components/Modal";
import styles from "./PostDetail.module.css";
import axios from "axios";

import { Link, useLoaderData } from "react-router-dom";

function PostDetail() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p> Unfortunately the requested post could not be found.</p>
          <p>
            <Link to=".." className={styles.btn}>
              Back
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.body}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetail;

export async function loader({ params }) {
  const res = await axios.get("http://localhost:8080/posts/" + params.postId);
  return res.data.post;
}
