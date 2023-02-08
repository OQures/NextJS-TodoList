import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";

export default function UserDashboard() {
  const { userInfo } = useAuth();
  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState("");

  return (
    <div className="w-full max-w-[65ch] mx-auto flex flex-col gap-3 sm: gap-5 text-xs sm:text-sm">
      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="outline-none p-3 text-sm sm:text-lg text-slate-900 duration-300 rounded-xl"
      />
      {userInfo && <></>}
      <button className="bg-cyan-300 text-slate-900 py-2 text-center uppercase text-lg rounded-xl duration-200 hover:opacity-30">
        ADD TODO
      </button>
    </div>
  );
}
