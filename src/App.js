import React from "react";
import Header from "./components/Header";
import NoteControl from "../src/components/notes/NoteControl";
// import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/users/SignIn";
import SignUp from "./components/users/SignUp";
import Account from "./components/users/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import SideBar from "./components/navbar/SideBar";

function App() {
  return (
    <>
    <Header />
    <AuthContextProvider>
    <Router>
    <SideBar />
      <Routes>
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={
        <ProtectedRoute>
          <Account />
          </ProtectedRoute> } />
          <Route path="/notes" element={<NoteControl />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </Router>
    </AuthContextProvider>
    </>
  );
}

export default App;
