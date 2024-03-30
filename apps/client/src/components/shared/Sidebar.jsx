import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { HiTicket } from "react-icons/hi2";

const Sidebar = ({ cambiarContenido }) => {
  return (
    <div className="bg-white bg-opacity-[0.2] w-[180px] m-3 rounded-lg phone:hidden tablet:w-[50px] tablet:mr-0">
      <img
        src="../../../public/flechaAmarilla.png"
        className="w-[80%] mx-auto"
      />
      <div className=" flex flex-row">
        <Avatar className="w-8 h-8 m-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-xs my-auto font-semibold">Ronaldo Acevedo</p>
      </div>
      <div className="mt-12"></div>
      <div id="content">
        <button className="flex flex-row hover:bg-slate-200 h-8 rounded-lg m-2 w-[90%]" onClick={() => cambiarContenido('home')}>
          <RiHomeSmile2Fill className="my-auto m-2" />
          <p className="text-xs my-auto font-bold">Home</p>
        </button>
      </div>
      <div id="content">
        <button className="flex flex-row hover:bg-slate-200 h-8 rounded-lg m-2 w-[90%]" onClick={() => cambiarContenido('tickets')}>
          <HiTicket className="my-auto m-2" />
          <p className="text-xs my-auto font-bold">Your Tickets</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
