import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email,password)
}

const name='AuthContext';
const AuthProviders = ({children}) => {

    const authInfo = {
        name, 
        createUser
    }

    return (
       
<AuthContext.Provider value={authInfo}>
{children}

</AuthContext.Provider>


    );
};

export default AuthProviders;
