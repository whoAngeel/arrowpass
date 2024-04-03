import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import JourneyCard from "./JourneyCard";
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
					<JourneyCard key={viaje.id} data={viaje}></JourneyCard>
				))}
			</ul>
		</div>
	);
}

export default index;
