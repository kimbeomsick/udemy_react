import Post from "./Post.js";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData(); // loader로 가져오기 밖에 못함 

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, i) => (
            <Post key={i} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div style={{ color: "white", textAlign: "center" }}>
          <h2>there are no posts</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
