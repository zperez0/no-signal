import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "../UI/Background.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUser(username, email, password);
      navigate("/account", { replace: true });
    } catch (e) {
      console.log(e.message);
    }
    console.log(username);
  };
  return (
    <>
      <div className="background">
        <p>{error}</p>
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
              <div className="signCard">
                <div className="h-100 w-full object-cover md:h-full md:w-80 ">
                  <div>
                    <h1 className="text-2xl font-bold py-2 text-center">
                      Sign up
                    </h1>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="boarder white flex flex-col py-2">
                      <label className="py-2 font-medium">Username</label>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        className="border p-3 rounded"
                        type="username"
                        placeholder="Username"
                      />
                    </div>

                    <div className="boarder white flex flex-col py-2">
                      <label className="py-2 font-medium ">Email Address</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-3 rounded"
                        type="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="flex flex-col py-2">
                      <label className="py-2 font-medium">Password</label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-3 rounded"
                        type="password"
                        placeholder="Password"
                      />
                    </div>

                    <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white font-bold rounded">
                      Sign up
                    </button>
                    <p className="inline-block p-2">
                      Already have an account?{" "}
                      <Link
                        to="/signin"
                        className="text-yellow-500  hover:underline"
                      >
                        Sign in.
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
