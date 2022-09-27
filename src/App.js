import React from "react";
import Header from "./../src/components/Header";
// import NoteControl from "./../src/components/NoteControl";
// import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/users/SignIn";
import SignUp from "./components/users/SignUp";
import Account from "./components/users/Account";

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      {/* <Route path="/sign-in" element={<SignIn />} /> */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/account" element={<Account />} />
      {/* <Route path="/" element={<HomePage />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
