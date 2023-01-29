import React from "react";

export default function Login() {
  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold text-xl sm:text-3xl duration-300">LOGIN</h1>
      <input
        type="text"
        placeholder="Enter Email Address..."
        className="outline-none text-slate-900 p-2 w-full max-w-[30ch] duration-300"
      />
      <input
        type="text"
        placeholder="Enter Password..."
        className="outline-none text-slate-900 p-2 w-full max-w-[30ch] duration-300"
      />
    </div>
  );
}
