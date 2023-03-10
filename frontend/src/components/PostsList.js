import Post from "./Post.js";
import styles from "./PostsList.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/posts").then((res) => {
      setPosts(res.data.posts);
      setIsFetching(false);
    });
  }, []); 

  // function addPostHandler(postData) {
  //   axios.post("http://localhost:8080/posts", postData);

  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, i) => (
            <Post key={i} author={i + ": " + post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ color: "white", textAlign: "center" }}>
          <h2>there are no posts</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && <div style={{ color: "white", textAlign: "center" }}>
          <p>loading posts ...</p>
        </div>}
    </>
  );
}

export default PostsList;
