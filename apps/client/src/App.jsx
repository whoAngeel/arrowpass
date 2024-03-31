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
}

export default App;
