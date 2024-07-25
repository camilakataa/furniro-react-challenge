import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in sucessfully");
      window.location.href = './Shop'
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center p-20">
      <div className="lg:w-[500px]">
        <h2 className="text-3xl font-bold text-center">Welcome, back!</h2>
        <p className="text-light text-gray-500 mb-12 text-center">
          Login with your account
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            className="h-[75px] w-full border-solid border border-gray-600 rounded-md mb-6 p-4 text-gray-600"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <label htmlFor="password">Password</label>
          <input
            className="h-[75px] w-full border-solid border border-gray-600 rounded-md mb-6 p-4 text-gray-600"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-yellow-dark w-[237px] h-[55px] text-white rounded-md mt-6"
            type="submit"
          >
            Login
          </button>
          <p className="py-6">Do you not have an account? <Link className="text-blue-400 font-bold" to="/Register">Register here</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
