import "./Posts.css";
import PostsList from '../components/PostsList';
import { Outlet } from "react-router-dom";
import axios from "axios";



function Posts() {



  return <div className="App">
      <Outlet/> 
    <main>
      <PostsList />
    </main>
  </div>

}
export default Posts;


export async function loader(){
  const res = await axios.get("http://localhost:8080/posts");
  console.log(res.data.posts);
  return res.data.posts;
}