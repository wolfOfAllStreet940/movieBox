// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVhCndrHk6hzWZGE0Oa-kMSEj0nhubD8Y",
    authDomain: "netflix-clone-f73d3.firebaseapp.com",
    projectId: "netflix-clone-f73d3",
    storageBucket: "netflix-clone-f73d3.firebasestorage.app",
    messagingSenderId: "157033866396",
    appId: "1:157033866396:web:060f467c6d4f5eab2c7959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async(name, email, password)=>{
    try{
       const response = await createUserWithEmailAndPassword(auth, email, password);
       const user = response.user;
       await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
       })
    }catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logOut = ()=>{
    signOut(auth);
}
export {auth,db,login,logOut,signUp};