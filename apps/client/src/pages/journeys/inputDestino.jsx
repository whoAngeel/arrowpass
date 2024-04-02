import Async, { useAsync } from "react-select/async";
import { IoIosSearch } from "react-icons/io";
import { FaCaretRight } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";

function InputDestino() {
	return (
		<div>
			<div className="">
				<div className="inline-flex flex-col justify-center relative text-gray-500">
					<div className="relative">
						<input
							type="text"
							className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
							placeholder="Destino..."
						/>
						<IoIosSearch className="w-4 h-4 absolute left-2.5 top-3.5" />
					</div>
					<h3 className="mt-2 text-sm">Gevonden:</h3>
					<ul className="bg-white border border-gray-100 w-full mt-2 ">
						<li className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
							<SiGooglemaps className="w-4 h-4 absolute left-2 top-2 stroke-current" />
							<b>Gar</b>dameer - Italië
						</li>
						<li className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
							<SiGooglemaps className="w-4 h-4 absolute left-2 top-2 stroke-current" />
							<b>Gar</b>dameer - Italië
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default InputDestino;
