import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
  {
    path: "/about",
    element: About,
    exact: true,
  },
  {
    path: "/error",
    element: Error,
    exact: true,
  },
  {
    path: "/posts",
    element: Posts,
    exact: true,
  },
  {
    path: "/posts/:id",
    element: PostIdPage,
    exact: true,
  },
];
