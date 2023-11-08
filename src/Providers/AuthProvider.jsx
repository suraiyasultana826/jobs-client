import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = (value) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
        const userEmail = currentUser?.email || user.email;
        const loggedUser = {email: userEmail};
        setUser(currentUser);
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            //if user exists issue a token
            if(currentUser){
              
                axios.post('https://assignment-eleven-server-gold.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token', res.data);
                })

            }
            else{
                axios.post('https://assignment-eleven-server-gold.vercel.app/logout', loggedUser, {
                    withCredentials: true
                } )
                .then(res => {
                    console.log(res.data);
                })
            }

        });
        return () => {
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;