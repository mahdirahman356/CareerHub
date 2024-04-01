import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase";

export const AuthContext = createContext()
const Context = ({children}) => {

   let [user,setUser] = useState() 

   let createUser = (email,passward) => {
     return createUserWithEmailAndPassword(auth,email,passward)
   }
   let singIn = (email,passward) => {
     return signInWithEmailAndPassword(auth,email,passward)
   }
   let  setName = (theUser,name) => {
       return updateProfile(theUser,name)
   }
   let setSingOut = () => {
    return signOut(auth)
   }
   
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        console.log("ON Auth State Changed", user);
        setUser(user);

    });

    return () => {
        unSubscribe();
    };
}, [user]); 

   

   
   let authInfo = {user, createUser, singIn, setName, setSingOut}
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