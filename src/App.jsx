import React, {useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './PAGES/HOME/Home'
import Login from './PAGES/LOGIN/Login'
import Player from "./PAGES/PLAYER/Player";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth,async user=>{
            if(user){
                console.log("Logged in");
                navigate("/");
            }else {
                console.log("Logged out");
                navigate("/login");
            }
            }
        )
    },[])
    return (
        <div>
            <ToastContainer theme='dark'/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/player/:id" element={<Player/>}/>
            </Routes>
        </div>
    )
}

export default App