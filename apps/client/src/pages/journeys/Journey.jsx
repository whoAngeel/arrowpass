// import Moment from "react-moment";

function Journey({ data }) {
	return (
		<div className="card w-4/5 bg-primary">
			<div className="card-body">
				<h2 className="card-title">{data.name}</h2>
				<div className="badge badge-secondary badge-lg text-lg">
					${data.ticketPrice}
				</div>
				{/* <Moment format="DD-MM-YYYY">data.schedule</Moment> */}
			</div>
		</div>
	);
}

export default Journey;
