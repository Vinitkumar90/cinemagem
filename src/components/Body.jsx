import React, { useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './Login';
import Browse from './Browse';
import MoviePage from './MoviePage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();

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
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const{uid,email,displayName,photoURL} = user;
                dispatch(addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL,
                }))
            }else{
                dispatch(removeUser());
            }
        })
    },[])


  return (
        <RouterProvider router={router} />
  )
}

export default Body