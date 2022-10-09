import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { UserAuth } from '../../context/AuthContext';
=======
import { UserAuth } from "../../context/AuthContext";
import "../UI/Background.css";
>>>>>>> simpleNotes

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account", { replace: true });
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="background">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
              <div className="signCard">
                <div className="h-100 w-full object-cover md:h-full md:w-80 ">
                  <div>
                    <h1 className="text-2xl font-bold py-2 text-center">
                      Sign in
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="boarder white flex flex-col py-2">
                      <label className="py-2 font-medium ">Email Address</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-3 rounded"
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col py-2">
                      <label className="py-2 font-medium">Password</label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-3 rounded"
                        type="password"
                      />
                    </div>

                    <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white font-bold rounded">
                      Sign In
                    </button>
                    <p className="inline-block p-2">
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-yellow-500  hover:underline"
                      >
                        Sign up.
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

export default SignIn;
