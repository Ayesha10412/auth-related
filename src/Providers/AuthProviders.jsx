import React, { createContext } from 'react';

const AuthContext = createContext(null)


const AuthProviders = ({children}) => {

    const authInfo = {
        name: 'Nodi nala khal bil.........'
    }

    return (
       
<AuthContext.Provider value={authInfo}>
{children}

</AuthContext.Provider>


    );
};

export default AuthProviders;