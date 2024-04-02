import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase";

export const AuthContext = createContext()
const Context = ({children}) => {
 
   let [user,setUser] = useState() 
   let [loading, setLoading] = useState(true)
   let createUser = (email,passward) => {
     setLoading(true)
     return createUserWithEmailAndPassword(auth,email,passward)
   }
   let singIn = (email,passward) => {
     setLoading(true)
     return signInWithEmailAndPassword(auth,email,passward)
   }
   let  setName = (theUser,name) => {
       setLoading(true)
       return updateProfile(theUser,name)
   }
   let setSingOut = () => {
    setLoading(true)
    return signOut(auth)
   }
   
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        setLoading(false)
        console.log("ON Auth State Changed", user);
        setUser(user);

    });

    return () => {
        unSubscribe();
    };
}, [user]); 

   

   
   let authInfo ={
    user,
    createUser, 
    singIn, 
    setName, 
    setSingOut, 
    loading
}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

Context.propTypes ={
    children : PropTypes.node.isRequired
}
export default Context;