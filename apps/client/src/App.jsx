import { Button } from "antd";
import { useToast } from "@chakra-ui/react";
function App() {
	return (
		<>
			<div className="bg-primary">Hola </div>
			<Button type="primary">hola </Button>
			<ToastExample></ToastExample>
		</>
	);
}
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

export default App;
