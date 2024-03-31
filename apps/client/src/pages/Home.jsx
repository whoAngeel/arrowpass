import React from "react";
import { Button } from "antd";
import { useToast } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa6";
import { Navbar } from "../components/Navbar";
const Home = () => {
	return (
		<>
			<Navbar />

			{/* daisy */}
			<div className="bg-primary">Hola </div>
			{/* antdesign */}
			<Button type="primary">hola </Button>
			{/* chakra ui */}
			<ToastExample></ToastExample>
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
