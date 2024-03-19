import React, { useState } from "react";
import image1 from "../assets/image1.png";

const Reset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setMessage("Please fill all fields");
    } else if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage("Your new password is confirmed");
    }
  };

  return (
    <div
      className="login-container bg-cover bg-center  h-[100vh] w-full"
      style={{ backgroundImage: `url(${image1})` }}
    >
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleReset}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {newPassword && !confirmPassword && (
            <p className="text-red-500 text-xs italic">Please confirm your new password</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword && newPassword !== confirmPassword && (
            <p className="text-red-500 text-xs italic">Passwords do not match</p>
          )}
        </div>
        {message && <p className="text-green-500 text-xs italic">{message}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Reset;
