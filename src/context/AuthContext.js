import { createContext, useContext, useEffect, useState} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';


const UserContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const createUser = (username, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      updateProfile(userCredential.user, {displayName: username})
      
    })
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      if(currentUser){
        setUser(currentUser)
      } else {
        setUser(false)
      }
    })
    return () => {
      unSubscribe()
    }
  }, [])

  return (
    <UserContext.Provider value={{ createUser, user, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};