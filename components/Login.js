import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password!");
      return;
    }
  }

  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-3 sm:gap-4">
      <h1 className="font-extrabold text-xl sm:text-3xl duration-300 select-none">
        {isLoggingIn ? "Login" : "Register"}
      </h1>
      {error && (
        <div className="w-full max-w-[30ch] border border-solid border-rose-400 text-rose-400 py-2 flex justify-center items-center">
          {error}
        </div>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter Email Address..."
        className="outline-none text-slate-900 p-2 w-full max-w-[30ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password..."
        className="outline-none text-slate-900 p-2 w-full max-w-[30ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
      />
      <button
        onClick={submitHandler}
        className="w-full max-w-[30ch] border border-white border-solid py-1 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <h2
        className="duration-300 hover:scale-110 cursor-pointer"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
  );
}
