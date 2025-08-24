import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './Login';
import Browse from './Browse';
import MoviePage from './MoviePage';

const Body = () => {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"movie/:movieId",
            element:<MoviePage/>
        },{
            path:"/vinit",
            element:<MoviePage/>
        }
    ])

  return (
        <RouterProvider router={router} />
  )
}

export default Body