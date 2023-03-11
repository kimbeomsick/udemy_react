import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Posts ,{loader as PostLoader}from "./routes/Posts";
import reportWebVitals from "./reportWebVitals";
import NewPost,{action as NewPostAction} from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import PostDetail,{loader as PostDetailLoader} from "./routes/PostDetail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// RouterProvider에서는 router가 기본 props인가보다
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/", //our domain
        element: <Posts />,
        loader:PostLoader, //이곳에 프로미스 객체가 오게 되면 <Posts/>는 요청을 받을 때까지 기다리게 된다. 
        children: [
          {
            path: "/create-post", // '/'가 있으면 절대 경로가 된다. 
            element: <NewPost />,
            action:NewPostAction
          },
          {
            path:':postId', //상대 경로가된다. 
            element : <PostDetail/>,
            loader:PostDetailLoader,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
