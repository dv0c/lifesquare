"use client";
import React, { useEffect, useState } from "react";
import { SearchPopup } from "./SearchPopup";

export const SearchBar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setOpen(!isOpen)}
        className="py-[10px] mx-5 hover:bg-[#e8e8ec] transition cursor-pointer pl-5 pr-2 bg-[#f1f1f3] max-w-[500px] w-full flex items-center rounded-full"
      >
        <span
          style={{ flex: "1 0 50%" }}
          className="overflow-hidden whitespace-nowrap text-ellipsis opacity-[.7]"
        >
          Search post, tags and authors
        </span>
        <span className="flex items-center w-[40px] h-[40px] justify-center p-[10px] rounded-full bg-[#f9c345]">
          <svg
            className="w-[14px]"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z"></path>
          </svg>
        </span>
      </div>
      <SearchPopup setOpen={setOpen} isOpen={isOpen} />
    </>
  );
};
