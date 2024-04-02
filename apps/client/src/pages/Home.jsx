import { Button } from "antd";
import { useToast } from "@chakra-ui/react";
// import { FaGoogle } from "react-icons/fa6";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<>
			<Navbar title={"Inicio"}>
				<Link className="btn btn-ghost" to={"/login"}>
					Ingresar
				</Link>
			</Navbar>

			{/* daisy */}
			<div className="bg-primary">Hola </div>
			{/* antdesign */}
			<Button type="primary">hola </Button>
			{/* chakra ui */}
			<ToastExample></ToastExample>
			<Link to={"/viajes"}>Viajes</Link>
		</>
	);
};
function ToastExample() {
	const toast = useToast();
	return (
		<Button
			onClick={() =>
				toast({
					title: "Account created.",
					description: "We've created your account for you.",
					status: "success",
					duration: 9000,
					isClosable: true,
				})
			}
		>
			Show Toast
		</Button>
	);
}

export default Home;
