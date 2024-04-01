import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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
   
    useEffect(()=> {
        let unSubscribe = onAuthStateChanged(auth, users => {
            setUser(users)
            console.log("ON Auth State Changed",user)
       })

       return () => {
        unSubscribe()
       }
    },[user])
   

   
   let authInfo = {user, createUser, singIn, setName,}
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