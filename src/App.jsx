import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Post, { loader as getPosts } from "./features/posts/Post";
import IndividualPost, {
  loader as getEachPost,
} from "./features/posts/IndividualPost";
import Login from "./features/account/Login";
import Profile from "./features/account/Profile";
import Bank from "./features/account/Bank";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/posts",
          element: <Post />,
          loader: getPosts,
        },
        {
          path: "/posts/:id",
          element: <IndividualPost />,
          loader: getEachPost,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/bank",
          element: <Bank />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
