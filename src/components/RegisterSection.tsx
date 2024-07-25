import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, dbUsers } from "../services/firebaseConfig";
import { Link } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";

const RegisterSection = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
           await createUserWithEmailAndPassword(auth, email, password);
           const user = auth.currentUser;
           console.log(user);
           if(user){
            await setDoc(doc(dbUsers, "Users", user.uid), {
                email: user.email,
                firstName: firstName,
                lastName: lastName,
            });
           }
           console.log("User Registered successfully");
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className="flex flex-col justify-center items-center p-20">
      <div className="lg:w-[500px]">
        <h2 className="text-3xl font-bold text-center">Welcome!</h2>
        <p className="text-light text-gray-500 mb-12 text-center">
          Sign up to create your account
        </p>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col sm:flex-row sm:gap-8">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              className="h-[75px] w-full border-solid border border-gray-600 rounded-md mb-6 p-4 text-gray-600"
              type="text"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              className="h-[75px] w-full border-solid border border-gray-600 rounded-md mb-6 p-4 text-gray-600"
              type="text"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          </div>
          <label htmlFor="email">Email address</label>
          <input
            className="h-[75px] w-full border-solid border border-gray-600 rounded-md mb-6 p-4 text-gray-600"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className="h-[75px] w-full border-solid border border-gray-600 rounded-md mb-6 p-4 text-gray-600"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-yellow-dark w-[237px] h-[55px] text-white rounded-md mt-6"
            type="submit"
          >
            Sign Up
          </button>
          <p className="py-6">Do you already have an account? <Link className="text-blue-400 font-bold" to="/Login">Login here</Link></p>
        </form>
      </div>
    </div>
  );
};

export default RegisterSection;
