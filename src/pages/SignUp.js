import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [selectedUser, setSelectedUser] = useState("Admin");
  const navigate = useNavigate()

  const handleTabClick = (userType) => {
    setSelectedUser(userType);
  };

  const handleSubmit = (e)=>{
    // API Call
    e.preventDefault();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-secondary to-primary p-4">
      <div className="bg-gradient-to-r from-[#00010f7e] to-[#0000ff3f] shadow-lg shadow-[#ffff632b] rounded-lg p-8 w-full max-w-lg">
        {/* Tab Navigation */}
        <div className="flex justify-between mb-6 border-b border-gray-300">
          {["Admin", "Service Provider", "Customer"].map((user) => (
            <button
              key={user}
              onClick={() => handleTabClick(user)}
              className={`px-4 py-2 w-full text-center transition duration-300 font-medium ${
                selectedUser === user
                  ? "border-b-4 border-yellow-200 text-slate-200"
                  : "text-slate-200 hover:text-yellow-200 hover:border-b-4 hover:border-yellow-400"
              }`}
            >
              {user}
            </button>
          ))}
        </div>

        {/* SignUp Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl text-center text-yellow-400 font-semibold mb-10">
            {selectedUser} SignUp
          </h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-8 border bg-[#03063a32] text-slate-200 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 transition duration-300 hover:border-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 border bg-[#03063a32] text-slate-200 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 transition duration-300 hover:border-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-primary py-2 rounded-lg font-semibold hover:bg-yellow-500 hover:text-primary-dark transition duration-300"
          >
            SignUp
          </button>
          <div className="cursor-pointer">
            <p className="text-center text-yellow-100">Already Have an Account <span className="text-blue-500" onClick={()=>navigate("/login")}>Login!</span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
