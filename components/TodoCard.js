import React from "react";

export default function TodoCard(props) {
  const { children } = props;
  return (
    <div className="p-2 border flex items-stretch border-solid border-white rounded-lg">
      <div className="flex-1">{children}</div>
      <div className="flex items-center">
        <i class="fa-solid fa-pen-to-square px-2 duration-300 hover:rotate-45 hover:scale-150 cursor-pointer"></i>
        <i className="fa-solid fa-trash px-2 duration-300 hover:scale-150 cursor-pointer"></i>
      </div>
    </div>
  );
}
