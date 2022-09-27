import { createContext, useContext, useEffect, useState} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateCurrentUser,
} from 'firebase/auth';
import { auth } from '../firebase';


const UserContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
      setUser(currentUser)
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