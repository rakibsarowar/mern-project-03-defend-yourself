import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


export const authContext = createContext();

const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // creating user ------------------------------------------------------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in ------------------------------------------------------------
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // // Log out ----------------------------------------------------------
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Sign in with Google --------------------------------------------------
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    // Get user profile -----------------------------------------------------
    const getUserProfile = () => {

        const currentUser = auth.currentUser;
        if (currentUser) {
            const name = currentUser.displayName;
            const photoURL = currentUser.photoURL;
            setUser({ ...user, name, photoURL });

        }

    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
            
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser)
            // get and set token
            if (loggedUser) {
                axios.post('http://localhost:5000/jwt', { email: loggedUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        getUserProfile();
                        setLoading(false);

                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })

        return () => {
            return unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        updateUserProfile,
        
    };

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>

    );
};

export default AuthProvider;