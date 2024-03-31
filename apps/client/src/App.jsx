import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";

function App() {
	return (
		<div>
			<Navbar />
			{/* <BrowserRouter> */}
			<Routes>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
			{/* </BrowserRouter> */}
		</div>
	);
}

export default App;
