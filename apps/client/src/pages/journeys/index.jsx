import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Journey from "./Journey";
import FormSearch from "./FormSearch";
function index() {
	const [viajes, setviajes] = useState([]);
	useEffect(() => {
		axios({
			method: "GET",
			url: "/api/journey",
		})
			.then((res) => {
				console.log(res.data);
				setviajes(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Navbar title={"Viajes"} />
			<FormSearch />
			{/* <h2>Lista de viajes</h2> */}
			<ul className="w-full flex flex-col items-center gap-2 mt-4 mb-10">
				{viajes.map((viaje) => (
					<Journey key={viaje.id} data={viaje}></Journey>
				))}
			</ul>
		</div>
	);
}

export default index;