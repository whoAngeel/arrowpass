import { Button } from "antd";
import { useToast } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";
export const Navbar = ({ title, children }) => {
	const token = localStorage.getItem("userToken");

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link to={"/"}>Inicio</Link>
						</li>
						<li>
							<Link to={"/viajes"}>Viajes</Link>
						</li>
						<li>
							<Link to={"/login"}>Iniciar sesión</Link>
						</li>
						<li>
							<Link to={"/logout"}>Cerrar sesion</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<label className="font-bold text-2xl">{title}</label>
			</div>
			<div className="navbar-end">
				{token ? <ProfileAvatar /> : <Link to={"/login"}>Ingresar</Link>}
			</div>
		</div>
	);
};
