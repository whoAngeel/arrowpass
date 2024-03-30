import Buy from "@/pages/Buy"
import Main from "../../pages/Main"
import Cars from "@/pages/Cars"
import Terminales from "@/pages/Terminales"
import Conductores from "@/pages/Conductores"
import Journey from "@/pages/Journey"

const Body = ({contenido}) => {
  return (
    <div className="w-[80%] mx-32  h-screen ">
      <div className=" h-[80px]  mt-5 flex flex-row " >
        <h1 className="my-auto mx-auto font-semibold">{contenido}</h1>
      </div>
    <div className="bg-white bg-opacity-[0.2] h-[500px]  rounded-xl phone:w-full phone:m-0 phone:rounded-none tablet:mx-5">
        {contenido == 'home' && <Buy/>}
        {contenido == 'tickets' && <Main/>}
        {contenido == 'buses' && <Cars/>}
        {contenido == 'terminales' && <Terminales/>}
        {contenido == 'conductores' && <Conductores/>}
        {contenido == 'Corridas' &&  <Journey/>}
    </div>
    </div>
  )
}

export default Body