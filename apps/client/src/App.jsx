import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SendEmail from "./pages/recoveryAccount/SendEmail";
function App() {
	return (
		<div>
			{/* <BrowserRouter> */}
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/recovery/send-email" element={<SendEmail />}></Route>
			</Routes>
			{/* </BrowserRouter> */}
		</div>
	);
}

export default App;
