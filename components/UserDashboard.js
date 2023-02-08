import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

export default function UserDashboard() {
  const { userInfo } = useAuth();
  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState({});

  useEffect(() => {
    if (!userInfo || Object.keys(userInfo).length === 0) {
      setAddTodo(true);
    }
  }, [userInfo]);

  async function handleAddTodo() {
    if (!todo) {
      return;
    }
    const newKey =
      Object.keys(todoList).length === 0
        ? 1
        : Math.max(...Object.keys(todoList)) + 1;
    setTodoList({
      ...todoList,
      [newKey]: todo,
    });
  }

  return (
    <div className="w-full max-w-[65ch] mx-auto flex flex-col gap-3 sm: gap-5 text-xs sm:text-sm">
      {addTodo && (
        <div className="flex items-stretch">
          <input
            type="text"
            placeholder="Enter Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="outline-none p-3 text-sm sm:text-lg text-slate-900 duration-300 flex-1 rounded-l-xl"
          />
          <button
            onClick={handleAddTodo}
            className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base rounded-r-xl duration-300 hover:opacity-40"
          >
            ADD
          </button>
        </div>
      )}
      {userInfo && (
        <>
          {Object.keys(todoList).map((todo, i) => {
            return <TodoCard key={i}>{todoList[todo]}</TodoCard>;
          })}
        </>
      )}
      {!addTodo && (
        <button
          onClick={() => setAddTodo(true)}
          className="text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg rounded-xl duration-200 hover:opacity-30"
        >
          ADD TODO
        </button>
      )}
    </div>
  );
}
