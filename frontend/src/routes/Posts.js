import "./Posts.css";
import PostsList from '../components/PostsList';
import {useState} from 'react';
import { Outlet } from "react-router-dom";



function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);



  return <div className="App">
      <Outlet/> 
    <main>
      <PostsList />
    </main>
  </div>

}
export default Posts;
