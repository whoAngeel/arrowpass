// import Moment from "react-moment";
import moment from "moment";
import { useHistory } from "react-router-dom";
function Journey({ data }) {
	const history = useHistory();
	return (
		<div className="card w-4/5 bg-primary">
			<div className="card-body">
				<h2 className="card-title">{data.name}</h2>
				<div className="badge badge-secondary badge-lg text-lg font-semibold">
					${data.ticketPrice}
				</div>
				{/* {moment(data.schedule).locale("es").format("llll")} */}
				{moment(data.schedule).locale("es").format("llll")}
			</div>
		</div>
	);
}

export default Journey;
