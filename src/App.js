import React from "react";
import NoteControl from "../src/components/notes/NoteControl";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/users/SignIn";
import SignUp from "./components/users/SignUp";
import Account from "./components/users/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import SideBar from "./components/navbar/SideBar";
import ParksControl from "./components/nationalAPI/ParksControl";
import MapControl from "./components/map/MapControl";

import WeatherControl from "./components/weather/WeatherControl";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <SideBar />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notes"
              element={
                <ProtectedRoute>
                  <NoteControl />
                </ProtectedRoute>
              }
            />
            <Route
              path="/parks"
              element={
                <ProtectedRoute>
                  <ParksControl />
                </ProtectedRoute>
              }
            />
            <Route
              path="/weather"
              element={
                <ProtectedRoute>
                  <WeatherControl />
                </ProtectedRoute>
              }
            />
            <Route
              path="/map"
              element={
                <ProtectedRoute>
                  <MapControl />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
