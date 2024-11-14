import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider()
const AuthProviders = ({children}) => {

const name='AuthContext';

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)

const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password)
}

const signInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const signInWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider )
}

const signOutUser= ()=>{
    setLoading(true)
    return signOut(auth);
}


useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        console.log('Current User:', currentUser)
        setUser(currentUser);
        setLoading(false);
    })

    return()=>{
        unSubscribe();
    }


}, [])


// onAuthStateChanged(auth, (currentUser)=>{

// if(currentUser){
//     console.log('Currently logged user:', user)
//     setUser(currentUser);
// }

// else{

//     console.log('No user Logged in!')
//     setUser(null)
// }

// })




    const authInfo = {
        loading,
        name, 
        user,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }

    return (
       
<AuthContext.Provider value={authInfo}>
{children}

</AuthContext.Provider>


    );
};

export default AuthProviders;
