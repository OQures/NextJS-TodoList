import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-3 py-3">
      <a href="https://www.linkedin.com/in/ossamaqureshi/">
        <i class="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer text-2xl sm:text-4xl"></i>
      </a>
      <a href="https://github.com/OQures">
        <i class="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer text-2xl sm:text-4xl"></i>
      </a>
      <a href="https://www.ossamaqureshi.com/">
        <i class="fa-solid fa-palette duration-300 hover:opacity-30 cursor-pointer text-2xl sm:text-4xl"></i>
      </a>
    </div>
  );
}
