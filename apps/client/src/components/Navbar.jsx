import React from "react";
import { Button } from "antd";
import { useToast } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa6";
export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          ArroWPass
        </a>
      </div>
      <div className="flex-none">
        
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <a className="btn mr-2" href="/login">
          Inicia Sesion
        </a>
        <a className="btn" href="/register">
          Registrate
        </a>
      </div>
    </div>
  );
};
