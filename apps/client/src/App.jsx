import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ResetPassword from "./pages/recoveryAccount/ResetPassword";
import SendEmail from "./pages/recoveryAccount/SendEmail";
import Viajes from "./pages/journeys/index.jsx";
// import
function App() {
	return (
		<div>
			{/* <BrowserRouter> */}

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/viajes" element={<Viajes></Viajes>}></Route>
				<Route path="/recovery/send-email" element={<SendEmail />}></Route>
				<Route
					path="/recovery/reset-password"
					element={<ResetPassword />}
				></Route>
			</Routes>
			{/* </BrowserRouter> */}
		</div>
	);
}
export default App;
