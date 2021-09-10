import React,{ createContext,useState } from "react";


export const FirebaseContext = createContext(null);
export const AuthenticationContext = createContext(null);


export default function Context({children}){
    const [user,setUser] = useState('null')



    return(
        <AuthenticationContext.Provider value={{user,setUser}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

