import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import MoviePage from "./MoviePage";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/moviePage/:movieId",
      element: <MoviePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
