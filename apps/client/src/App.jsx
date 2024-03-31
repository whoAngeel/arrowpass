<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div>
		<Navbar/>
		<BrowserRouter>	
		<Routes>
			<Route path='/login' element={<Login/>}></Route>
			<Route path='/register' element={<Register/>}></Route>
		</Routes>
		</BrowserRouter>
	</div>
  );
=======
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
>>>>>>> e61e1ab7810a9c2260e385a35b58ac44eb7b4140
}

export default App;
