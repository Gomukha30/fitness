import React, { useState } from "react";
import image1 from "../assets/image1.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    // Logic to handle password reset
  };

  const validateEmail = (email) => {
    // Basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleResetClick = () => {
    // Redirect to reset page
    window.location.href = '/reset'; // Change '/reset' to your actual reset page URL
  };

  return (
    <div
      className="login-container bg-cover bg-center  h-[100vh] "
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className=" text-xl font-bold flex items-center justify-center h-screen ">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto border-2 border-gray-300 m-4 p-5 bg-white"
        >
          <label htmlFor="email" className="block mb-2 text-2xl">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 mb-4 rounded-md w-full"
            required
          />
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            onClick={handleResetClick}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
