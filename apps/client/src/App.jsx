import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
function App() {
	return (
		<div>
			{/* <BrowserRouter> */}
			<Routes>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
			{/* </BrowserRouter> */}
		</div>
	);
}

export default App;
